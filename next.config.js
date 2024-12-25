/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com', 'arcon.s3.amazonaws.com'],
  },
  output: 'standalone', // For server-side rendering
};

module.exports = nextConfig;
