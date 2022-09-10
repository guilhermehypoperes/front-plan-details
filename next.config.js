/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['poc-mistica-br-storage.azureedge.net', 'poc-mistica-br-storage.azureedge.net/icons'],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig
