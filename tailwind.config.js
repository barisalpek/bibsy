module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "pinkky":"#FDE9FF",
       "pp":"#250039",
       "btnpinkky":"#E5627A",
      },
    },
  },
  plugins: [

    require("autoprefixer")
  ],
}
