/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Garante que o build ignore erros de linting para subir mais rápido
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
