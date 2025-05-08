/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add any image domains you need here
  },
  // No need for experimental.appDir since it's now stable
  // Other configuration options can go here
}

module.exports = nextConfig