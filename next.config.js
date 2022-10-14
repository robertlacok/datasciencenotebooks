module.exports = (phase, config) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
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
  };

  return nextConfig;
};
