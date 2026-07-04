# DojoBuro Desktop (Tauri)

Packages the DojoBuro web app as a native desktop app with **two windows**:

- **main** — the full 3D office (`index.html#app`)
- **widget** — a small, borderless, **always-on-top** monitor of live dojo
  activity (`index.html#widget`), hidden at launch and toggled from the system
  tray. Keep it in a corner while you work in other apps.

The widget reuses the exact same `ActivityWidget` component the web app shows
in-office, so there's no separate UI to maintain. You can preview it in a plain
browser at `/#widget` before ever installing the Rust toolchain.

## One-time setup

1. Install the Rust toolchain — <https://rustup.rs> (plus the OS webview deps
   listed in the Tauri prerequisites: <https://tauri.app/start/prerequisites/>).
2. Add the JS-side CLI + API (kept out of the default install so web-only
   contributors don't pull Rust tooling):

   ```bash
   npm i -D @tauri-apps/cli @tauri-apps/api
   ```

3. Generate app icons from the DojoBuro logo (writes `src-tauri/icons/`):

   ```bash
   npm run tauri icon path/to/logo.png
   ```

## Run & build

```bash
npm run desktop        # dev: launches Vite + the native shell with hot reload
npm run desktop:build  # production: bundles installers into src-tauri/target/release/bundle
```

`beforeDevCommand`/`beforeBuildCommand` in `tauri.conf.json` already run the
Vite dev server / `npm run build`, so those are the only commands you need.

## How the widget window works

- Declared in `tauri.conf.json` → `app.windows[]` as `label: "widget"` with
  `alwaysOnTop`, `decorations: false`, `skipTaskbar: true`, `transparent: true`,
  `visible: false`.
- `src/main.rs` adds a tray menu ("Show/Hide dojo widget") that toggles its
  visibility, and intercepts the widget's close button to just hide it (closing
  the **main** window quits the app).
- The web side (`src/WidgetApp.tsx`) fills the OS window with `ActivityWidget`
  and, on close, calls the Tauri window API to hide the native window (falling
  back to `#app` in a browser). The title bar area is draggable via
  `data-tauri-drag-region` + the `-webkit-app-region: drag` CSS on `.aw-head`.

## Files

| File | Purpose |
|------|---------|
| `tauri.conf.json` | window definitions, build hooks, bundle config |
| `Cargo.toml` | Rust crate + Tauri deps |
| `build.rs` | Tauri build script |
| `src/main.rs` | app entry: tray toggle + widget close-to-hide |
| `capabilities/default.json` | window permissions (show/hide/always-on-top/drag) |
| `icons/` | generated app icons (run `npm run tauri icon`) |
