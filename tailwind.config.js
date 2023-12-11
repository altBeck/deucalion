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
          '200': "#3B82F7",
          '300': "#0153D5",
          '600': "#0053D8",
        },

        'off-white' : {
          '50': '#FCFCFC',
          '100': '#F5F5F7',
          '300': '#666666',
        },

        'rogue' : {
          '100': '#FF5601',
          '200': '#2A2B6B',
          '300': '#F08D0D',
          '400': '#1F1A1A',
          '500': '#313131',
        },
      },
    },
  },
  plugins: [],
}

