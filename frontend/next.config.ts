import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Traído desde next.config.js
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  async redirects() {
    return [
      {
        source: '/voto-ahorro',
        destination: '/stake',
        permanent: true,
      },
    ]
  },
}

export default nextConfig