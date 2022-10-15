const addProtocol = (url: string) => {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
};

export const PUBLIC_URL: string = addProtocol(
  process.env.NEXT_PUBLIC_VERCEL_URL!
);
export const DEPLOYED_ENV = (process.env.NEXT_PUBLIC_VERCEL_ENV ??
  "development") as "production" | "preview" | "development";
export const GTM_ID = DEPLOYED_ENV === "production" ? "GTM-N858BSK" : null;
