
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        Pixelify_sans: ['Pixelify Sans', 'sans-serif'],

      },
      colors: {
        // Adding your custom color
        customPink: '#E3A5C7',
        // You can add more custom colors like this
        customBlue: '#4A90E2',
        customPurple: "694F8E",
        customLightPurple: "B692C2",
        customSkin: "FFDFD6",
        
      },
    },
  },
  plugins: [
    require("daisyui")
  ],

  daisyui: {
    themes: ["light"], // Set light theme as default, and optionally include others like dark
  },
}