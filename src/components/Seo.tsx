import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
}

export function Seo({
  title = "Data science notebooks | Find your next notebook tool",
  description,
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      {description ? (
        <meta key="description" name="description">
          {description}
        </meta>
      ) : null}

      <meta key="og:title" property="og:title" content={title} />
      {description ? (
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
      ) : null}
    </Head>
  );
}
