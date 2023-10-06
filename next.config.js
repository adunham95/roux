/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const runtimeCaching = require('next-pwa/cache');

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  pwa: {
    disable: !isProduction,
    dest: 'public',
    runtimeCaching,
  },
};

module.exports = nextConfig;
