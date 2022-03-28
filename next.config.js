/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  i18n: {
    locales: ["en-US", "pt-BR", "es-ES"],
    defaultLocale: "pt-BR",
  },
};
