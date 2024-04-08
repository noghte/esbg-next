/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'esbg.lunovid.com',
      },
    ],
  },
  };
  
  export default nextConfig;
  