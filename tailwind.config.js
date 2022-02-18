const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkky: "#FDE9FF",
        pp: "#250039",
        btnpinkky: "#E5627A",
        ljusLila: "#F7EBFB",
        lila: "#8B29AD",
        mörkLila: "#541A69",
        ljusGrön: "#F3F8EA",
        grön: "#89B52B",
        mörkGrön: "#58741B",
        ljusGul: "#FBF7EB",
        gul: "#D6B235",
        mörkGul: "#897222",
        ljusRöd: "#F9E9EB",
        röd: "#B52B33",
        mörkRöd: "#741B21",
        ljusBlå: "#EAF4F8",
        blå: "#2B94B5",
        mörkBlå: "#1B5E74",
        ljusRosa: "#F9EAF1",
        rosa: "#C33289",
        mörkRosa: "#5F1939",
        adminSidebar: "#1F102B",
      },
    },
  },
  plugins: [
    require("autoprefixer"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".content-auto": {
          "content-visibility": "auto",
        },
        ".content-hidden": {
          "content-visibility": "hidden",
        },
        ".content-visible": {
          "content-visibility": "visible",
        },
      });
    }),
  ],
};
