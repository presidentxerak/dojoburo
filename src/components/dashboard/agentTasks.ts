// Which task ids belong to which agent.
//
// Used to count what a teammate has actually produced: the deliverables store
// is keyed by task, so this is the map from an agent to "their" work. Shared by
// the roster (activity + last-seen) and by graph mode.
export const AGENT_TASKS: Record<string, string[]> = {
  chief: ['strategy'],
  brandi: ['brand'],
  weblos: ['website'],
  marketus: ['ads', 'video', 'assets'],
  pumpi: ['outreach'],
  busino: ['offer', 'analytics', 'finance'],
  sentinel: [],
  vaultor: [],
}
