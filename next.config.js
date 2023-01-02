/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
