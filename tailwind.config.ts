import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '60': '60',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25,0.1,0.25,1)',
      },
    },
  },
};

export default config;
