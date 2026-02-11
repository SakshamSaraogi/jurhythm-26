export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: "title" | "associate" | "partner";
}

export type SponsorTier = "title" | "associate" | "partner";
