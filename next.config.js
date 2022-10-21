const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

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

  return withMDX(nextConfig);
};
