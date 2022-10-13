export const PUBLIC_URL: string = process.env.NEXT_PUBLIC_URL!;
export const DEPLOYED_ENV = (process.env.NEXT_DEPLOYED_ENV ?? "development") as
  | "production"
  | "development";
export const GTM_ID = DEPLOYED_ENV === "production" ? "GTM-N858BSK" : null;
