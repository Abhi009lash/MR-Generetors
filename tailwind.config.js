/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#00163D',
          900: '#0A1D3F',
          850: '#131D3B',
          800: '#0F2B5C',
        },
        brand: {
          blue: '#385BAB',
          lightBlue: '#88A9FE',
          softBlue: '#DFE9FB',
          paleBlue: '#E5EEFF',
          red: '#D32F2F',
          amber: '#D97706',
        },
        surface: {
          light: '#F8F9FF',
          soft: '#EFF4FF',
        },
        industrial: {
          textDark: '#121C29',
          textMuted: '#44464F',
          textLightMuted: '#747780',
        }
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}
