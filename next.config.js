/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async() => [
    {
      source: "/api/info",
      destination: "/info.json"
    }
  ],
  reactStrictMode: true,
};

module.exports = nextConfig;
