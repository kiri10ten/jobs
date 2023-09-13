/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",],

  // ...
  theme: {
    extend: {
      colors: {
        'custom-blue': '#00ffcc',
      },
      fontFamily: {
        sans: ["'DM Sans'", "'DM Sans fallback'", "'sans-serif'"],
      },
    },
  },
  // ...

  plugins: [],
}

