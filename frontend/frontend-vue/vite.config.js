// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./tests/setup.js"
    }
});


