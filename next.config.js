/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for catching potential issues
  reactStrictMode: true,

  // Hide the default bottom-left dev route indicator (replaced by site UI)
  devIndicators: false,

  // Image optimization — allow the default public folder
  images: {
    domains: [],
  },

  // Optional: set a base path if the site is hosted at a sub-path
  // basePath: '',
};

module.exports = nextConfig;
