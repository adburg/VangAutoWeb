/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = {
  env: {
    GOOGLE_ADS: process.env.GOOGLE_ADS,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false
      };
    }

    return config;
  }
};
