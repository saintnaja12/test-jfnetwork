/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        'a-black-1F2937': '#1F2937',
        'a-black-111827': '#111827',
        'a-gray-E5E7EB': '#E5E7EB',
        'a-gray-F3F4F6': '#F3F4F6',
        'a-gray-D6D9DF': '#D6D9DF',
      },
      screens: {
        's-1440': "1440px",
    },
    },
  },
  plugins: [],
};
