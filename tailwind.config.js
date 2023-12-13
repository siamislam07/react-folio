/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
      animation:{
        spin:'spin 7s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes:{
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

