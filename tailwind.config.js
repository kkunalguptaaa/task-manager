/** @type {import('tailwindcss').Config} */

/* 
Theme colors generated using Tailwind CSS
Color Generator Website https://uicolors.app/create 
For referencing to the strength of colors present below (light to dark):
  50: '#fff1f4',
  100: '#fee5ea',
  200: '#fccfd9',
  300: '#faa7bb',
  400: '#f77598',
  500: '#f05985',
  600: '#db2362',
  700: '#b81852',
  800: '#9a174b',
  900: '#841745',
  950: '#4a0722',
*/

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background:{
            light: '#fff1f4',
            medium: '#faa7bb',
            dark: '#b81852',
          },
          icons: {
            default: '#f05985',
            hover: '#db2362',
          },
          default: '#f05985',
          text: {
            default: '#b81852',
            dark: '#4a0722',
            heading: '#9a174b'
          },
          border: '#f77598',
          button: {
            default: '#f05985',
            hover: '#db2362',
            active: '#b81852',
          },
        },
      }
    },
  },
  plugins: [],
}
