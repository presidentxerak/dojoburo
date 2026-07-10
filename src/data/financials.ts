// Investor financials for the pitch deck. One source of truth for the on-screen
// tables and the exported PDF. Model: blended paying ARPU ~$240/yr, ~9% of
// users convert to paid, model cost near-zero (BYOK / free cascade), costs
// scale sublinearly with users. Figures are illustrative projections.

export const CONTACT_EMAIL = ''

/** Unit economics by scale · how the business looks at each user tier (steady state, per year). */
export const FORECAST = {
  title: 'Unit economics by scale',
  note: 'Blended paying ARPU ~$240/yr · ~9% convert to paid · model cost is near-zero because users bring their own key or run the free cascade.',
  head: ['Per year', '100 users', '1,000 users', '10,000 users', '100,000+ users'],
  rows: [
    ['Paying users (~9%)', '9', '90', '900', '9,000'],
    ['Revenue (ARR)', '$2.2k', '$21.6k', '$216k', '$2.16M'],
    ['Infra + model cost', '$8k', '$18k', '$120k', '$0.86M'],
    ['Gross margin', 'seed', '+17%', '+44%', '+60%'],
    ['Net / year', '-$5.8k', '+$3.6k', '+$96k', '+$1.3M'],
  ],
}

/** 5-year business plan · the growth trajectory and P&L. */
export const BUSINESS_PLAN = {
  title: '5-year business plan',
  note: 'Bottom-up: users grow 1k → 180k, ~9% paying at $240/yr, costs scale sublinearly. Cash-flow positive from Year 2.',
  head: ['Metric', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
  rows: [
    ['Users (end of year)', '1,000', '8,000', '30,000', '80,000', '180,000'],
    ['Paying users', '90', '720', '2,700', '7,200', '16,200'],
    ['Revenue (ARR)', '$22k', '$173k', '$648k', '$1.73M', '$3.89M'],
    ['Total costs', '$80k', '$160k', '$360k', '$760k', '$1.5M'],
    ['Net result', '-$58k', '+$13k', '+$288k', '+$0.97M', '+$2.39M'],
  ],
}
