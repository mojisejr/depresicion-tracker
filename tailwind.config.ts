import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#282E41",

          secondary: "#F6F6F6",

          accent: "#00c746",

          neutral: "#2B2D33",

          "base-100": "#FFF",

          info: "#0075c5",

          success: "#00b889",

          warning: "#ef9600",

          error: "#ff839a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
