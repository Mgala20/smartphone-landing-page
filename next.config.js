/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add your image domains here
  },
  // Remove all experimental configurations
}

module.exports = nextConfig