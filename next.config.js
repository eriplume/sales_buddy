/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'profile.line-scdn.net',
        },
      ],
    },
    // reactStrictMode: false,
  }

module.exports = nextConfig