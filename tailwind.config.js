import { Colors } from './constants/Colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentations/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          terteary: Colors.light.terteary,
          background: Colors.light.background,
          text: Colors.light.text,
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          terteary: Colors.dark.terteary,
          background: Colors.dark.background,
          text: Colors.dark.text,
        },
      }
    },
  },
  plugins: [],
}

