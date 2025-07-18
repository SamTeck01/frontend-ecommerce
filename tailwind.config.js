/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f0f2f5',
        secondary: '#ff813f',
        tertiary: '#222222',
        slate: {
          10: '#f1f3f4',
        },
        ash: '#575757',
        gold: '#F7F4E9',
        gold2: '#E49900',
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
      },
     backgroundImage: {
        hero: "url('/src/assets/solar gadgets hero 2.jpg')",
        banneroffer: "url('/src/assets/solar gadgets hero.jpg')",
        freepage: "url('/src/assets/pexels-photo-9875680.jpeg')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
}