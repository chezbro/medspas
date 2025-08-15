# Med Spa Agency Website

A modern, high-converting marketing website for a Los Angeles-based Med Spa marketing agency. Built with Next.js, Tailwind CSS, and Supabase.

## Features

- Modern, responsive design
- AI-powered Facebook/Instagram ads showcase
- Google Maps optimization services
- Lead generation forms with Supabase integration
- Blog system for marketing tips
- Performance-based pricing with guarantee
- Exit-intent popup for lead magnet
- GDPR-compliant cookie consent

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (Database + Auth)
- Framer Motion
- HeadlessUI
- React Hook Form

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/medspa_agency.git
   cd medspa_agency
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The site is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Database Schema

### Lead Submissions
- id: uuid
- created_at: timestamp
- name: string
- email: string
- phone: string
- spa_name: string
- marketing_budget: string
- message: string (optional)

### Blog Posts
- id: uuid
- created_at: timestamp
- title: string
- slug: string
- content: string
- excerpt: string
- published: boolean
- featured_image: string (optional)

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.