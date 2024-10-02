/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        glighter: "#dff1e7",
        gmedium: "#0c7d69",
        error: "#d73c3c",
        greymedium: "#87a3a6",
        greydarker: "#2b4246",
      },
      margin: {
        "10px": "10px",
      },
      padding: {
        "10px": "10px",
      },
    },
  },
  plugins: [],
};
