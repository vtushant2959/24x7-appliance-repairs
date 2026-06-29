import type { Config } from "tailwindcss";
const config: Config = { darkMode: ["class"], content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { brand: { blue: "#0a63d8", navy: "#10233f", orange: "#f97316", ink: "#172033", mist: "#eef6ff" } }, boxShadow: { soft: "0 16px 50px rgba(16, 35, 63, 0.12)" }, fontFamily: { sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"] } } }, plugins: [] };
export default config;
