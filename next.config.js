/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async() => [
    {
      source: "/api/info",
      destination: "/info.json"
    }
  ],
  reactStrictMode: true,
  images: {
    domains: [
    "life-coach-quotes.vercel.app",
    "what-to-read-nu.vercel.app",
    "movie-random-react.vercel.app",
    "next-food-random.vercel.app",

    ]
  }
};

module.exports = nextConfig;
