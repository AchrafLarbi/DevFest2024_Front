import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        20: "20px",
      },
      colors: {
        "regal-grey": "#BDBDBD",
      },
    },
  },
});
