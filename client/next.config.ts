// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // autorise les images venant de localhost:4000
  },
}

module.exports = nextConfig
