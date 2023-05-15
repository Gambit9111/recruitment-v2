import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'color-black': '#0E0D0C',
        'color-white': '#FFF8E1',
        'color-graylight': '#D3CDB6',
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
    },
  },
  plugins: [],
} satisfies Config;
