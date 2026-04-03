/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export', // 👈 ESTO ES CLAVE
  images: {
    unoptimized: true,
  },
}

export default nextConfig
