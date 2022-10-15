const addProtocol = (url: string) => {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
};

export const DEPLOYED_ENV = (process.env.NEXT_PUBLIC_VERCEL_ENV ??
  "development") as "production" | "preview" | "development";

export const PUBLIC_URL: string =
  DEPLOYED_ENV === "production"
    ? // We hardcode the production URL because we don't want to use the
      // `VERCEL_URL` env var, which is a random string representing the
      // specific deployment.
      "https://datasciencenotebook.org"
    : addProtocol(process.env.NEXT_PUBLIC_VERCEL_URL!);
export const GTM_ID = DEPLOYED_ENV === "production" ? "GTM-N858BSK" : null;
