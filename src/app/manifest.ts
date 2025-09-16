import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AI Ads for Med Spas | Smarter Ads. More Appointments.',
    short_name: 'MedSpa Ads',
    description: 'Complete AI-powered marketing solutions: video ads, Google Maps optimization, speed-to-lead systems, and paid ads management that fill your calendar with qualified patients.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#14b8a6',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    categories: ['business', 'marketing', 'health'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    prefer_related_applications: false,
  }
}
