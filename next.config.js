/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
      },
    ],
  },
};
