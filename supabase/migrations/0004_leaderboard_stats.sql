-- Persisted leaderboard stats so public profiles can be ranked with real data.
alter table public.profiles add column if not exists score integer not null default 0;
alter table public.profiles add column if not exists streak integer not null default 0;
