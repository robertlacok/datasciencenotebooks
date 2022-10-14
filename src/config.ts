export const PUBLIC_URL: string = process.env.NEXT_PUBLIC_VERCEL_URL!;
export const DEPLOYED_ENV = (process.env.NEXT_PUBLIC_VERCEL_URL ??
  "development") as "production" | "preview" | "development";
export const GTM_ID = DEPLOYED_ENV === "production" ? "GTM-N858BSK" : null;
