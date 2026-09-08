-- =====================================================================
-- Retire the settlement tables. OPTIONAL, and deliberately not run by anything.
--
--   psql "$DATABASE_URL" -f db/retire-settlement.sql
--
-- Why this is a separate file
-- ---------------------------
-- These objects were created by an older db/schema.sql for a product that sold
-- credits and settled them on a ledger:
--
--   account_balances      a view · sum(credit_ledger.delta_xrp) as balance_xrp
--   credit_ledger         credit movements, in a unit that no longer exists
--   settlements           the on-ledger payout for a paid top-up
--   checkout_sessions     the fiat→XRP amount map for a one-off charge
--   accounts.xrpl_address where settled XRP was delivered
--
-- Nothing in the application has read or written any of them for a long time:
-- the ledger rail was removed, and a run is authorised by a quota in
-- work_usage, never by a balance. The current db/schema.sql no longer creates
-- them, so a fresh install never has them at all.
--
-- This is a one-way drop of real rows. If a deployment ever took money through
-- the old one-off path, credit_ledger and checkout_sessions are the only record
-- of it — so export them first if you might ever need to answer a question
-- about a 2025 payment:
--
--   \copy (select * from credit_ledger)     to 'credit_ledger.csv'     csv header
--   \copy (select * from checkout_sessions) to 'checkout_sessions.csv' csv header
--   \copy (select * from settlements)       to 'settlements.csv'       csv header
--
-- Order matters: the view reads the ledger, and settlements references
-- checkout_sessions.
-- =====================================================================

drop view  if exists account_balances;
drop table if exists credit_ledger;
drop table if exists settlements;
drop table if exists checkout_sessions;

alter table accounts drop column if exists xrpl_address;
