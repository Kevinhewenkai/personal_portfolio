import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "768px",
        lg: "1024px",
      },
      colors: {
        default: "#030712",
        gray50: "#F9FAFB",
        gray600: "#4B5563",
        gray900: "#111827",
      },
      fontSize: {
        h1D: [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-2%",
            fontWeight: "700",
          },
        ],
        h1M: [
          "36px",
          {
            lineHeight: "40px",
            letterSpacing: "-2%",
            fontWeight: "600",
          },
        ],
        p1: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "-2%",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
