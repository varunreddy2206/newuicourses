/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: "127.0.0.1",
        port: '8888',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: "127.0.0.1",
        port: '8899',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
