import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
    ],
  },

  // Font loading configuration
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Font loading configuration
  async rewrites() {
    return [
      {
        source: '/fonts/:path*',
        destination: 'https://fonts.googleapis.com/:path*',
      },
    ]
  },

  // Font loading configuration
  async redirects() {
    return [
      {
        source: '/fonts/:path*',
        destination: 'https://fonts.googleapis.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
