/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com', 'arcon.s3.amazonaws.com'],
  },
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable Next.js image optimization for static exports
  },
  output: 'export', // Ensure this is for static export
};

module.exports = nextConfig;
