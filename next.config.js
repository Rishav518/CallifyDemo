/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "https://d2l1mqxn454m0a.cloudfront.net",
    ],
  },
}

module.exports = nextConfig

