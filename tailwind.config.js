/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      colors: {
        primary: 'var(--primary)',
        red: {
          DEFAULT: '#BE1B2D',
        },
        label: '#8093AE',
        'jz-text-1': '#333333',
        'jz-text-2': '#364256',
        'jz-text-3': '#54657E',
        'jz-text-4': '#8093AE',
        'jz-text-5': '#AAB9CA',
        'jz-text-6': '#BFBFBF',
        'jz-ash-1': '#8692A5',
        'jz-ash-2': '#A8B7CE',
        'jz-ash-3': '#B9C5D8',
        'jz-ash-4': '#D3DBE6',
        'jz-ash-5': '#E5E9F0',
        'jz-ash-6': '#F6F8FA',
        'jz-blue': '#0555FF',
      },
    },
  },
  plugins: [
    scrollbar,
    // require('tailwind-scrollbar'),
],
}
