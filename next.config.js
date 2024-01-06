/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    reactStrictMode: true,
    experimental: { esmExternals: true },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = { fs: false, module: false };
      }
      return config;
    },
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    future: {
      webpack5: true,
    },
    pages: {
      // Adicione a marcação "use client" para os arquivos necessários
      // Exemplo:
      './src/components/BodyPage.tsx': { useClient: true },
      './src/app/page.tsx': { useClient: true },
    },
  };
  