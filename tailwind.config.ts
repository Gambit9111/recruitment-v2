import { type Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'color-black': '#111011',
        'color-white': '#F6F2EC',
        'color-graylight': '#E9B34D',
        'color-graydark': '#34322C',
        'color-yellow': '#FFD95A',
      },
      screens: {
        '360p': '360px',
        '390p': '390px',
        '414p': '414px',
        '768p': '768px',
        '800p': '800px',
        '1280p': '1280px',
        '1366p': '1366px',
        '1440p': '1440px',
        '1536p': '1536px',
        '1920p': '1920px',
        '2560p': '2560px',
        // Add more custom screen sizes if needed
      },

      fontFamily: {
        "Archivo": ["Archivo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
