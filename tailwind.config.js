/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#6C5DD3',
          light: '#8677E0',
          text: '#404656',
          success: '#60BF9D',
          error: '#EF887F',
          active: '#6E6AF0',
          bg: '#FFFFFF',
          border: '#F7F7F7',
        },

        secondary: {
          main: '#B2BFFA',
          error: '#FBE4E1',
          success: '#EDFAF6',
          bg: '#F7F7F7',
        },

        label: {
          text: '#959BA3',
          must: { bg: '#FDE2E2', text: '#E5484D' },
          medium: { bg: '#E1EAFF', text: '#3E63DD' },
          tiny: { bg: '#DAF7E9', text: '#12A150' },
          huge: { bg: '#EDE4FF', text: '#7C4DFF' },
        }
      },
      fontSize: {
        'xs': '8px',
        'sm': '10px',
        'base': '12px',
        'lg': '14px',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

