-- Create playbook_downloads table
create table if not exists public.playbook_downloads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null,
  ip_address text,
  user_agent text,
  downloaded_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.playbook_downloads enable row level security;

-- Create policies
create policy "Enable insert for all users"
  on public.playbook_downloads for insert
  with check (true);

create policy "Enable read for authenticated users only"
  on public.playbook_downloads for select
  using (auth.role() = 'authenticated');

-- Create indexes
create index playbook_downloads_email_idx on public.playbook_downloads (email);
create index playbook_downloads_created_at_idx on public.playbook_downloads (created_at desc);
create index playbook_downloads_downloaded_at_idx on public.playbook_downloads (downloaded_at desc);
