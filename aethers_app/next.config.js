/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // <-- THIS replaces `next export`
  };
  
module.exports = nextConfig;

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};