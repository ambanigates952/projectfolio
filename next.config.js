/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure static HTML export
  output: 'export',
  // Configure image domains if needed
  images: {
    domains: ['your-domain.com'],
    unoptimized: true
  },
  // Disable server components for static export
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig 