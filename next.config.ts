/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Vous pouvez essayer cette option si les problèmes persistent
  },
}

module.exports = nextConfig