/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: "/_next/image",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=2629743, must-revalidate",
        },
      ],
    },
  ],
  rewrites: async () => [
    {
      source: "/api/info",
      destination: "/info.json",
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "*.vercel.app",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
      },
    ],
  },
};

if (process.env.HTML) {
  nextConfig.output = "export";
  nextConfig.images.unoptimized = true;
}

module.exports = nextConfig;
