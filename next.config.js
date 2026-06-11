/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  turbopack: {},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false
      };
    }

    return config;
  }
};
