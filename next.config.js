/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  i18n: {
    locales: ["pt-BR", "en-US", "es-ES"],
    defaultLocale: "pt-BR",
  },
};
