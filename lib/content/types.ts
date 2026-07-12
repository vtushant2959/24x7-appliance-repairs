export interface Service {
  name: string;
  slug: string;
  appliance: string;
  shortDescription: string;
  image: string;
  issues: string[];
}

export interface Brand {
  name: string;
  slug: string;
  tagline: string;
  specialty: string;
}

export interface Area {
  name: string;
  slug: string;
  map: string;
  nearbyAreaSlugs: string[];
  intro: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Problem {
  name: string;
  slug: string;
  serviceSlug: string;
  symptoms: string[];
  likelyCauses: { cause: string; explanation: string }[];
  diySafetyChecks: string[];
  whenToCallAPro: string[];
  relatedErrorCodeSlugs: string[];
  relatedProblemSlugs: string[];
}

export interface ErrorCode {
  slug: string;
  brandSlug: string;
  code: string;
  applianceCategory: string;
  serviceSlug: string;
  meaning: string;
  severity: "Safe to check yourself" | "Call a technician";
  likelyCauses: string[];
  diySteps: string[] | null;
  relatedProblemSlug: string | null;
}

export interface ComboPage {
  brandSlug: string;
  serviceSlug: string;
  areaSlug: string;
  localIntro: string;
  whyThisCombo: string;
  relatedProblemSlugs: string[];
  relatedErrorCodeSlugs: string[];
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export interface Article {
  title: string;
  slug: string;
  category: string;
  serviceSlug: string;
  areaSlug?: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  body: ArticleBlock[];
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  serviceSlug?: string;
  areaSlug?: string;
  date: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  yearsExperience: number;
  specialties: string[];
  areaSlugs: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}
