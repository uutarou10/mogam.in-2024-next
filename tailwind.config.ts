import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: {
        primary: '#1C3E4F',
        secondary: '#5C5C5C',
        invert: '#FFFFFF'
      },
      border: {
        default: '#D9D9D9'
      },
      bg: {
        brand: '#2C6C9A'
      },
      brand: '#2C6C9A'
    },
    extend: {
      fontFamily: {
        "sans": ['var(--font-biz-ud-p-gothic)', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};
export default config;
