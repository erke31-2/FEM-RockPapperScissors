/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BarlowSemi: ["Barlow Semi Condensed", "san-serif"],
      },
      colors: {
        DarkText: "hsl(229, 25%, 31%)",
        ScoreText: "hsl(229, 64%, 46%)",
        HeaderOutline: "hsl(217, 16%, 45%)",
        ScissorsG1: "hsl(39, 89%, 49%)",
        ScissorsG2: "hsl(40, 84%, 53%)",
        PaperG1: "hsl(230, 89%, 62%)",
        PaperG2: "hsl(230, 89%, 65%)",
        RockG1: "hsl(349, 71%, 52%)",
        RockG2: "hsl(349, 70%, 56%)",
        LizardG1: "hsl(261, 73%, 60%)",
        LizardG2: "hsl(261, 72%, 63%)",
        CyanG1: "hsl(189, 59%, 53%)",
        CyanG2: "hsl(189, 58%, 57%)",
      },
      backgroundImage: {
        bgTriangle: "url('/images/bg-triangle.svg')",
        bgPentagon: "url('/images/bg-pentagon.svg')"
      },
      keyframes: {
        radiate: {
          from: {
            transform: "scale(1, 1)",
            opacity: ".5",
          },
          to: {
            transform: "scale(3, 3)",
            opacity: "0",
          },
        },
      },
      animation: {
        radiate: "radiate 4s infinite cubic-bezier(.36, .11, .89, .32)",
      },
    },
  },
  plugins: [],
};
