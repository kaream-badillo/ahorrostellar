/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    return [
      {
        source: '/voto-ahorro',
        destination: '/stake',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
