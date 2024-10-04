/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "images.pexels.com"],
    minimumCacheTTL: 60,
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
};

export default nextConfig;
