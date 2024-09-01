import { default as react } from '@vitejs/plugin-react';
import { defineConfig } from "vite";
import babel from 'vite-plugin-babel';


// https://vitejs.dev/config/

import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    babel({
      babelConfig: {
        babelrc: true,
        configFile: true
      }
    })
  ],
  define: {
    'process.env': process.env
  },
  build: {
    rollupOptions: {
      external: [
        'load-bmfont',
        'three-bmfont-text',
        'three-bmfont-text/shaders/msdf' // Externalize the shader module
      ]
    }
  },
  assetsInclude: ['**/*.fnt']  // Include .fnt files as assets

});