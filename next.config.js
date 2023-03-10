/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [{ source: "/", destination: "/home" }],
  redirects: async () => [{ source: "/home", destination: "/", permanent: true }],
  images: { domains: ["localhost"] },
};

module.exports = nextConfig;
