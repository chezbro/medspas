-- Create blog_posts table
create table if not exists public.blog_posts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text not null unique,
  content text not null,
  excerpt text not null,
  published boolean default false,
  featured_image text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.blog_posts enable row level security;

-- Create policies
create policy "Enable read access for all users"
  on public.blog_posts for select
  using (published = true);

create policy "Enable insert for authenticated users only"
  on public.blog_posts for insert
  with check (auth.role() = 'authenticated');

create policy "Enable update for authenticated users only"
  on public.blog_posts for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Create indexes
create index blog_posts_slug_idx on public.blog_posts (slug);
create index blog_posts_published_idx on public.blog_posts (published);
create index blog_posts_created_at_idx on public.blog_posts (created_at desc);

-- Set up updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger handle_blog_posts_updated_at
  before update on public.blog_posts
  for each row
  execute procedure public.handle_updated_at();
