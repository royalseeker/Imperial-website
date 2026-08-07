/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces static HTML export
  images: {
    unoptimized: true, // Required for Next.js static export
  },
};

export default nextConfig;