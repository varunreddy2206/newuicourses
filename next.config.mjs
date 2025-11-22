/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["example.com"], // 👈 Add your image host here
  },
};

export default nextConfig;
