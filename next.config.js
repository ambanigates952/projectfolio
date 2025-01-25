/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['your-domain.com'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp']
  },
  // Disable features that might cause build issues
  experimental: {
    appDir: false,
    serverComponents: false,
    optimizeCss: true,
    scrollRestoration: true
  },
  // Specify the export
  output: 'export',
  // Disable server-side features
  target: 'serverless',
  // Add trailing slash to URLs
  trailingSlash: true,
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  security: {
    headers: () => [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig 