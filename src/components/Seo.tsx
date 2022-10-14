import Head from "next/head";
import { PUBLIC_URL } from "../config";
import socialImageUrl from "../images/social-image.png";
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
        <meta key="description" name="description" content={description} />
      ) : null}

      <meta key="og:title" property="og:title" content={title} />
      {description ? (
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
      ) : null}
      <meta
        key="og:image"
        property="og:image"
        content={new URL(socialImageUrl.src, PUBLIC_URL).href}
      />
    </Head>
  );
}
