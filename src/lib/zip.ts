// Minimal ZIP reader/writer (STORE method, no external dep). Enough to bundle a
// whole dojo project — JSON docs + binary asset blobs — into one downloadable
// `.dojo` file (a standard zip) and read it back. Blobs are already compressed
// (webp/webm), so we store uncompressed and keep it simple + robust.

const CRC_TABLE = (() => {
  const t = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[n] = c >>> 0
  }
  return t
})()

function crc32(buf: Uint8Array): number {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

export interface ZipEntry { name: string; data: Uint8Array }

/** Build a STORE-method zip from a list of entries. */
export function zipStore(entries: ZipEntry[]): Uint8Array {
  const enc = new TextEncoder()
  const locals: Uint8Array[] = []
  const centrals: Uint8Array[] = []
  let offset = 0

  for (const e of entries) {
    const nameBytes = enc.encode(e.name)
    const crc = crc32(e.data)
    const size = e.data.length

    const local = new Uint8Array(30 + nameBytes.length)
    const lv = new DataView(local.buffer)
    lv.setUint32(0, 0x04034b50, true)   // local file header sig
    lv.setUint16(4, 20, true)           // version needed
    lv.setUint16(6, 0, true)            // flags
    lv.setUint16(8, 0, true)            // method: store
    lv.setUint16(10, 0, true); lv.setUint16(12, 0, true) // time/date
    lv.setUint32(14, crc, true)
    lv.setUint32(18, size, true)        // compressed size
    lv.setUint32(22, size, true)        // uncompressed size
    lv.setUint16(26, nameBytes.length, true)
    lv.setUint16(28, 0, true)           // extra len
    local.set(nameBytes, 30)
    locals.push(local, e.data)

    const central = new Uint8Array(46 + nameBytes.length)
    const cv = new DataView(central.buffer)
    cv.setUint32(0, 0x02014b50, true)   // central dir sig
    cv.setUint16(4, 20, true); cv.setUint16(6, 20, true)
    cv.setUint16(8, 0, true); cv.setUint16(10, 0, true)
    cv.setUint16(12, 0, true); cv.setUint16(14, 0, true)
    cv.setUint32(16, crc, true)
    cv.setUint32(20, size, true); cv.setUint32(24, size, true)
    cv.setUint16(28, nameBytes.length, true)
    cv.setUint16(30, 0, true); cv.setUint16(32, 0, true)
    cv.setUint16(34, 0, true); cv.setUint16(36, 0, true)
    cv.setUint32(38, 0, true)
    cv.setUint32(42, offset, true)      // local header offset
    central.set(nameBytes, 46)
    centrals.push(central)

    offset += local.length + e.data.length
  }

  const centralSize = centrals.reduce((n, c) => n + c.length, 0)
  const centralOffset = offset
  const eocd = new Uint8Array(22)
  const ev = new DataView(eocd.buffer)
  ev.setUint32(0, 0x06054b50, true)
  ev.setUint16(8, entries.length, true)
  ev.setUint16(10, entries.length, true)
  ev.setUint32(12, centralSize, true)
  ev.setUint32(16, centralOffset, true)

  const total = offset + centralSize + eocd.length
  const out = new Uint8Array(total)
  let p = 0
  for (const part of [...locals, ...centrals, eocd]) { out.set(part, p); p += part.length }
  return out
}

/** Read a STORE (or already-stored) zip into entries. Only method 0 supported. */
export function unzip(buf: Uint8Array): ZipEntry[] {
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength)
  const dec = new TextDecoder()
  // find EOCD
  let eocd = -1
  for (let i = buf.length - 22; i >= 0; i--) { if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break } }
  if (eocd < 0) throw new Error('Not a .dojo/zip file')
  const count = dv.getUint16(eocd + 10, true)
  let p = dv.getUint32(eocd + 16, true)
  const out: ZipEntry[] = []
  for (let i = 0; i < count; i++) {
    if (dv.getUint32(p, true) !== 0x02014b50) break
    const nameLen = dv.getUint16(p + 28, true)
    const extraLen = dv.getUint16(p + 30, true)
    const commentLen = dv.getUint16(p + 32, true)
    const lho = dv.getUint32(p + 42, true)
    const name = dec.decode(buf.subarray(p + 46, p + 46 + nameLen))
    // read the local header at lho to find the data start
    const lNameLen = dv.getUint16(lho + 26, true)
    const lExtraLen = dv.getUint16(lho + 28, true)
    const size = dv.getUint32(lho + 18, true) // compressed size (== size for store)
    const dataStart = lho + 30 + lNameLen + lExtraLen
    out.push({ name, data: buf.subarray(dataStart, dataStart + size) })
    p += 46 + nameLen + extraLen + commentLen
  }
  return out
}
