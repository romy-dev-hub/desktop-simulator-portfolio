/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack for stable builds
  experimental: {
    turbo: undefined
  },
  // Enable SWC minification
  swcMinify: true,
  // Optimize for Vercel
  output: 'standalone',
  // Enable static exports if needed
  // output: 'export',
  images: {
    unoptimized: true // If you're using next/image
  }
}

module.exports = nextConfig