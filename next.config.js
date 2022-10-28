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
    async redirects() {
      return [
        {
          source: "/alternatives/:slug",
          destination: "/:slug#alternatives",
          permanent: true,
        },
        {
          source: "/features/realtime-collaboration",
          destination: "/jupyter-realtime-collaboration",
          permanent: true,
        },
        {
          source: "/features/versioning",
          destination: "/jupyter-version-control",
          permanent: true,
        },
      ];
    },
  };

  return nextConfig;
};
