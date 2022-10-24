module.exports = (phase, config) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    rewrites: () => {
      return [
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap",
        },
      ];
    },
    experimental: {
      nextScriptWorkers: true,
    },
    async redirects() {
      return [
        {
          source: "/alternatives/:slug",
          destination: "/:slug#alternatives",
          permanent: true,
        },
      ];
    },
  };

  return nextConfig;
};
