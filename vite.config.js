//bundler?
//some new features available now for JavaScript

import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    build:{
        minify:"terser",
    },
});