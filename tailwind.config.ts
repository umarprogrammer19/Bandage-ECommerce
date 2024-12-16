import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-lg": { min: "1280px", max: "1535px" }, // Custom screen range
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primaryColor: "#23A6F0",
        secondarycolorOne: "#23856D",
        lighttextColor: "#FFFFFF",
        secondtextColor: "#737373",
        textColor: "#252B42",
        darkbackgroundColor: "#252B42",
        textgrayOne: "#FAFAFA",
        sucessColor: "#2DC071",
        muttedColor: "#BDBDBD",
        secondColorOne: "#23856D",
        dangerColor: "#E74040",
        disabledelementColor: "#8EC2F2",
        outlineColor: "#E6E6E6",
        lightbgColor: "#F9F9F9",
        alertColor: "#E77C40",
        borderColor: "#ECECEC",
        hoverColor: "#2A7CC7",
        borderLine: "#E8E8E8",
        thirdtextColor: "#858585",
        paginationBg: "#F3F3F3",
        fadedPrimaryColor: "#B2E3FF",
        roundedOutline: "#D0D0D0",
        roundedBg: "#EBEBEB",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
