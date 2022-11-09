import Head from "next/head";
import { PUBLIC_URL } from "../config";
import socialImageUrl from "../images/social-image.png";
interface SeoProps {
  title?: string;
  description?: string;
}

export const SITE_TITLE = "Data Science Notebooks";
export const SITE_DESCRIPTION =
  "Data science gets done in notebooks. Compare different notebook tools at datasciencenotebook.org.";

export function Seo({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
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
