const plugin = require('tailwindcss/plugin')

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

        'ljusLila': '#F7EBFB',
        'lila': '#AC35D6',
        'mörkLila': '#541A69',
        'ljusGrön': '#F3F8EA',
        'grön': '#89B52B',
        'mörkGrön': '#58741B',
        'ljusGul': '#FBF7EB',
        'gul': '#D6B235',
        'mörkGul': '#897222',
        'adminSidebar': '#1F102B',
      }
    },
  },
  plugins: [
    require("autoprefixer"),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      })
    })
  ],
}
