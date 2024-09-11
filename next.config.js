/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  output: 'export', // Specify you're exporting static HTML
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

module.exports = nextConfig;
