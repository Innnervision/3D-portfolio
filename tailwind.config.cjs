/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#104020",        // Dark Gray
        secondary: "#999999",      // Medium Gray
        tertiary: "#004040",       // Light Gray
        "black-100": "#505050",    // Very Dark Gray
        "black-200": "#000000",    // Almost Black
        "white-100": "#999999",    // Very Light Gray
        accent: "#808080",         // Accent Gray
        warning: "#000099",        // Warning Yellow
        danger: "#990000",         // Danger Red
      },
      boxShadow: {
        card: "0px 10px 20px rgba(2, 0, 0, 0.1)", // Subtle shadow
        strong: "0px 10px 40px rgba(3, 0, 0, 0.2)", // Strong shadow
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "footer-texture": "url('/src/assets/footer-texture.png')",
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
    },
  },
  plugins: [],
};
