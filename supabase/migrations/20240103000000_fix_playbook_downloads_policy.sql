-- Drop the existing insert policy
drop policy if exists "Enable insert for all users" on public.playbook_downloads;

-- Create a new policy that allows anonymous inserts
create policy "Allow anonymous inserts for playbook downloads"
  on public.playbook_downloads for insert
  with check (true);
