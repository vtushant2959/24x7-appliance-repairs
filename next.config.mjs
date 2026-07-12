const oldBrandSlugRedirects = [
  ["samsung-repair", "samsung"],
  ["lg-repair", "lg"],
  ["ifb-repair", "ifb"],
  ["bosch-repair", "bosch"],
  ["whirlpool-repair", "whirlpool"],
  ["haier-repair", "haier"],
  ["hitachi-repair", "hitachi"],
].map(([from, to]) => ({
  source: `/brands/${from}`,
  destination: `/brands/${to}`,
  permanent: true,
}));

const removedBrandRedirects = ["voltas-repair", "toshiba-repair", "panasonic-repair"].map(
  (slug) => ({
    source: `/brands/${slug}`,
    destination: "/brands",
    permanent: true,
  }),
);

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      ...oldBrandSlugRedirects,
      ...removedBrandRedirects,
      { source: "/services/ac-repair", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
