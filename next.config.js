/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: "/:all*(svg|jpg|png)",
      locale: false,
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
};

module.exports = nextConfig;
