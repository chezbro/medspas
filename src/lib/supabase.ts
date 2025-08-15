import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type LeadSubmission = {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  spa_name: string
  marketing_budget: string
  message?: string
}

export type BlogPost = {
  id: string
  created_at: string
  title: string
  slug: string
  content: string
  excerpt: string
  published: boolean
  featured_image?: string
}
