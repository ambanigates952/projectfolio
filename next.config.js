/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['your-domain.com']
  },
  // Disable features that might cause build issues
  experimental: {
    appDir: false,
    serverComponents: false
  },
  // Specify the export
  output: 'export',
  // Disable server-side features
  target: 'serverless',
  // Add trailing slash to URLs
  trailingSlash: true,
  // Disable source maps in production
  productionBrowserSourceMaps: false
}

module.exports = nextConfig 