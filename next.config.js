/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.plasticsurgery.org',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
