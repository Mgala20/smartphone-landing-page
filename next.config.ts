/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static exports
  images: {
    unoptimized: true, // Disables Image Optimization API (required for static exports)
  },
  // Optional: Add if you need trailing slashes
  trailingSlash: true,
  
  // Enable React Strict Mode (recommended)
  reactStrictMode: true,

  // If using App Router, add this:
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig