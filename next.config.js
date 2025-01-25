/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: 'serverless',
  images: {
    loader: 'custom',
    unoptimized: true
  },
  experimental: {
    appDir: false
  },
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, 'framer-motion']
    }
    return config
  }
}

module.exports = nextConfig 