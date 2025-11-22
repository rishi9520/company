import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Mobile-first responsive typography
      fontSize: {
        'xs': ['clamp(0.75rem, 1.5vw + 0.5rem, 0.875rem)', { lineHeight: '1.5' }],
        'sm': ['clamp(0.875rem, 1.8vw + 0.5rem, 1rem)', { lineHeight: '1.5' }],
        'base': ['clamp(1rem, 2.2vw + 0.2rem, 1.125rem)', { lineHeight: '1.6' }],
        'lg': ['clamp(1.125rem, 2.5vw + 0.3rem, 1.25rem)', { lineHeight: '1.6' }],
        'xl': ['clamp(1.25rem, 3vw + 0.4rem, 1.5rem)', { lineHeight: '1.5' }],
        '2xl': ['clamp(1.5rem, 3.5vw + 0.5rem, 2rem)', { lineHeight: '1.4' }],
        '3xl': ['clamp(1.875rem, 4vw + 0.75rem, 2.5rem)', { lineHeight: '1.3' }],
        '4xl': ['clamp(2.25rem, 5vw + 1rem, 3.5rem)', { lineHeight: '1.2' }],
        '5xl': ['clamp(2.5rem, 6vw + 1rem, 4rem)', { lineHeight: '1.1' }],
        '6xl': ['clamp(3rem, 7vw + 1.5rem, 5rem)', { lineHeight: '1' }],
        '7xl': ['clamp(3.5rem, 8vw + 2rem, 6rem)', { lineHeight: '1' }],
        '8xl': ['clamp(4rem, 10vw + 2rem, 7rem)', { lineHeight: '1' }],
      },
      // Mobile-first spacing scale
      spacing: {
        'section-mobile': 'clamp(3rem, 6vw, 4rem)',
        'section-tablet': 'clamp(4rem, 8vw, 5rem)',
        'section-desktop': 'clamp(5rem, 10vw, 6rem)',
        'container-mobile': 'clamp(1rem, 4vw, 1.5rem)',
        'container-desktop': 'clamp(1.5rem, 5vw, 2rem)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(16, 185, 129, 0.6)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.8s ease-out",
        "slide-right": "slide-right 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
