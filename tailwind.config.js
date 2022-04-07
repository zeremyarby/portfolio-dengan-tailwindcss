module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      color: {
        biru: "#38bdf8",
        hitam: "#0f172a",
      },
      fontFamily: {
        lora: "'Lora', serif",
        poppins: "'Poppins', sans-serif",
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
  enabled: process.env.NODE_ENV === "production",
};
