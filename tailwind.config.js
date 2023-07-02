const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-primary": "#FFFFFF",
        "white-secondary": "#F8FAFC",
        "dark-primary": '#0F172A',
        "dark-secondary": "#1F2937",
        "dark-gray": "#334155",
        "dark-gray-secondary": "#1F2937",
        "accent-primary": "#6D28D9",
        "accent-secondary": "#36B6F0",
        "accent-extra": "#051103",
        "border-primary": "rgba(71,85,105,.1)",
        "border-secondary": "rgba(248,250,252,.08)",
        blob: {
          1: "#FF8731",
          2: "#3FB8A9",
          3: "#0168FB",
          4: "#309EE8",
          5: "#F8BD48"
        }
      },
      backgroundImage: {
        'gradient1': "linear-gradient(180deg,#f8fafc,rgba(242,202,252,.11) 34.69%,rgba(250,198,252,.11) 44.06%,rgba(175,183,255,.11) 54.48%,rgba(142,220,200,.07) 64.9%,#f8fafc 97.95%);",
      },
      gridTemplateColumns: {
        250: "repeat(auto-fit, minmax(250px, 1fr))",
        300: "repeat(auto-fit, minmax(300px, 1fr))"
      }
    },
  },
  plugins: [],
});