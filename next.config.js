/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'profile.line-scdn.net',
        },
        {
          protocol: 'https',
          hostname: 'scdn.line-apps.com',
        },
      ],
    },
    // reactStrictMode: false,
  }

module.exports = nextConfig