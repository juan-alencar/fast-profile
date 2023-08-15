/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      offWhite: '#F3F1FD',
      gray100: '#E2E1E6',
      gray200: '#AAA9B2',
      gray400: '#7C7C8A',
      gray600: '#323238',
      gray800: '#202024',
      gray900: '#121214',

      purple100: '#6347EB',
      purple200: '#4C37B8',
      purple300: '#39298A',
      purple400: '#261C5C',
      purple500: '#150D40',
      purple600: '#0B081A',
    },
  },
  plugins: [],
}
