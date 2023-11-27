/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Inter"', 'system-ui'],
        'display': ['"Bebas Neue"', 'system-ui'],
      },
      colors : {
        'regal': {
          '100': "rgba(5, 49, 64, 0.75) 0%",
          '200': "#0099CC",
          '300': "#01212B",
        },

        'blu' : {
          '100': "#344054",
        },

        'rogue' : {
          '100': '#FF5601',
        },
      },
    },
  },
  plugins: [],
}

