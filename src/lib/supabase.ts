import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Missing Supabase environment variables')
  }
  console.warn('Missing Supabase environment variables - using dummy data for development')
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

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