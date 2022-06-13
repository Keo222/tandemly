/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        15: ".15",
      },
      fontSize: {
        "3.5xl": "2rem",
        "6.5xl": "4rem",
      },
      height: {
        "94vh": "94vh",
      },
      letterSpacing: {
        4: "0.4em",
      },
      margin: {
        "2vw": "2vw",
        "2vh": "2vh",
        "3vw": "3vw",
        "3vh": "3vh",
        "5vw": "5vw",
        "5vh": "5vh",
        "50vw": "50vw",
        "50vh": "50vh",
        "90vw": "90vw",
        "90vh": "90vh",
        "94vw": "94vw",
        "94vh": "94vh",
        "95vw": "95vw",
        "95vh": "95vh",
      },
      width: {
        "50vw": "50vw",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
