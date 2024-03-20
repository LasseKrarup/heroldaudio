/** @type {import('tailwindcss').Config} */

export default {
  content: [    
  `components/**/*.{vue,js,ts}`,
  `layouts/**/*.vue`,
  `pages/**/*.vue`,
  `composables/**/*.{js,ts}`,
  `plugins/**/*.{js,ts}`,
  `utils/**/*.{js,ts}`,
  `App.{js,ts,vue}`,
  `app.{js,ts,vue}`,
  `Error.{js,ts,vue}`,
  `error.{js,ts,vue}`,
  `app.config.{js,ts}`],
  theme: {
    extend: {
      colors: {
        'night': "#000f08",
        'glaucous': "#677DB7",
        'vista': "#9CA3DB",
        'crimson': "#D72638",
      },
      fontFamily: {
        "inter": 'Inter, sans-serif'
      },
      width: {
        "double": "200%"
      },
      height: {
        "double": "200%"
      }
    },
  },
  plugins: [],
}

