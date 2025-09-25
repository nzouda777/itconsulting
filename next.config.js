/** @type {import('next').NextConfig} */
// import { i18n } from './i18n';
const nextConfig = {
    // Pas besoin de configuration i18n avec next-intl pour App Router
    experimental: {
      serverComponentsExternalPackages: ['next-intl']
    },
    images: {
        domains: ['http://127.0.0.1:3000', 'https://itcloudconsultings.com'], // Ajoutez des domaines externes si nécessaire
        formats: ['image/webp', 'image/avif'], // Formats modernes pour de meilleures performances
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      },
    // i18n,
  }
  const withNextIntl = require('next-intl/plugin')(
    './i18n.ts'
  );
  module.exports = withNextIntl(nextConfig);