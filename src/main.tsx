import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Provider as ReduxQueryProvider } from "redux-query-react";

import App from "./App";

const themes = {
  version: "5.3.3",
  themes: [
    {
      name: "Cerulean",
      description: "A calm blue sky",
      thumbnail: "https://bootswatch.com/cerulean/thumbnail.png",
      preview: "https://bootswatch.com/cerulean/",
      css: "https://bootswatch.com/5/cerulean/bootstrap.css",
      cssMin: "https://bootswatch.com/5/cerulean/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/cerulean/bootstrap.min.css",
      scss: "https://bootswatch.com/5/cerulean/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/cerulean/_variables.scss",
    },
    {
      name: "Cosmo",
      description: "An ode to Metro",
      thumbnail: "https://bootswatch.com/cosmo/thumbnail.png",
      preview: "https://bootswatch.com/cosmo/",
      css: "https://bootswatch.com/5/cosmo/bootstrap.css",
      cssMin: "https://bootswatch.com/5/cosmo/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/cosmo/bootstrap.min.css",
      scss: "https://bootswatch.com/5/cosmo/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/cosmo/_variables.scss",
    },
    {
      name: "Cyborg",
      description: "Jet black and electric blue",
      thumbnail: "https://bootswatch.com/cyborg/thumbnail.png",
      preview: "https://bootswatch.com/cyborg/",
      css: "https://bootswatch.com/5/cyborg/bootstrap.css",
      cssMin: "https://bootswatch.com/5/cyborg/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/cyborg/bootstrap.min.css",
      scss: "https://bootswatch.com/5/cyborg/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/cyborg/_variables.scss",
    },
    {
      name: "Darkly",
      description: "Flatly in night mode",
      thumbnail: "https://bootswatch.com/darkly/thumbnail.png",
      preview: "https://bootswatch.com/darkly/",
      css: "https://bootswatch.com/5/darkly/bootstrap.css",
      cssMin: "https://bootswatch.com/5/darkly/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/darkly/bootstrap.min.css",
      scss: "https://bootswatch.com/5/darkly/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/darkly/_variables.scss",
    },
    {
      name: "Flatly",
      description: "Flat and modern",
      thumbnail: "https://bootswatch.com/flatly/thumbnail.png",
      preview: "https://bootswatch.com/flatly/",
      css: "https://bootswatch.com/5/flatly/bootstrap.css",
      cssMin: "https://bootswatch.com/5/flatly/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/flatly/bootstrap.min.css",
      scss: "https://bootswatch.com/5/flatly/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/flatly/_variables.scss",
    },
    {
      name: "Journal",
      description: "Crisp like a new sheet of paper",
      thumbnail: "https://bootswatch.com/journal/thumbnail.png",
      preview: "https://bootswatch.com/journal/",
      css: "https://bootswatch.com/5/journal/bootstrap.css",
      cssMin: "https://bootswatch.com/5/journal/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/journal/bootstrap.min.css",
      scss: "https://bootswatch.com/5/journal/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/journal/_variables.scss",
    },
    {
      name: "Litera",
      description: "The medium is the message",
      thumbnail: "https://bootswatch.com/litera/thumbnail.png",
      preview: "https://bootswatch.com/litera/",
      css: "https://bootswatch.com/5/litera/bootstrap.css",
      cssMin: "https://bootswatch.com/5/litera/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/litera/bootstrap.min.css",
      scss: "https://bootswatch.com/5/litera/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/litera/_variables.scss",
    },
    {
      name: "Lumen",
      description: "Light and shadow",
      thumbnail: "https://bootswatch.com/lumen/thumbnail.png",
      preview: "https://bootswatch.com/lumen/",
      css: "https://bootswatch.com/5/lumen/bootstrap.css",
      cssMin: "https://bootswatch.com/5/lumen/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/lumen/bootstrap.min.css",
      scss: "https://bootswatch.com/5/lumen/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/lumen/_variables.scss",
    },
    {
      name: "Lux",
      description: "A touch of class",
      thumbnail: "https://bootswatch.com/lux/thumbnail.png",
      preview: "https://bootswatch.com/lux/",
      css: "https://bootswatch.com/5/lux/bootstrap.css",
      cssMin: "https://bootswatch.com/5/lux/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/lux/bootstrap.min.css",
      scss: "https://bootswatch.com/5/lux/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/lux/_variables.scss",
    },
    {
      name: "Materia",
      description: "Material is the metaphor",
      thumbnail: "https://bootswatch.com/materia/thumbnail.png",
      preview: "https://bootswatch.com/materia/",
      css: "https://bootswatch.com/5/materia/bootstrap.css",
      cssMin: "https://bootswatch.com/5/materia/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/materia/bootstrap.min.css",
      scss: "https://bootswatch.com/5/materia/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/materia/_variables.scss",
    },
    {
      name: "Minty",
      description: "A fresh feel",
      thumbnail: "https://bootswatch.com/minty/thumbnail.png",
      preview: "https://bootswatch.com/minty/",
      css: "https://bootswatch.com/5/minty/bootstrap.css",
      cssMin: "https://bootswatch.com/5/minty/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/minty/bootstrap.min.css",
      scss: "https://bootswatch.com/5/minty/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/minty/_variables.scss",
    },
    {
      name: "Morph",
      description: "A neumorphic layer",
      thumbnail: "https://bootswatch.com/morph/thumbnail.png",
      preview: "https://bootswatch.com/morph/",
      css: "https://bootswatch.com/5/morph/bootstrap.css",
      cssMin: "https://bootswatch.com/5/morph/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/morph/bootstrap.min.css",
      scss: "https://bootswatch.com/5/morph/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/morph/_variables.scss",
    },
    {
      name: "Pulse",
      description: "A trace of purple",
      thumbnail: "https://bootswatch.com/pulse/thumbnail.png",
      preview: "https://bootswatch.com/pulse/",
      css: "https://bootswatch.com/5/pulse/bootstrap.css",
      cssMin: "https://bootswatch.com/5/pulse/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/pulse/bootstrap.min.css",
      scss: "https://bootswatch.com/5/pulse/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/pulse/_variables.scss",
    },
    {
      name: "Quartz",
      description: "A glassmorphic layer",
      thumbnail: "https://bootswatch.com/quartz/thumbnail.png",
      preview: "https://bootswatch.com/quartz/",
      css: "https://bootswatch.com/5/quartz/bootstrap.css",
      cssMin: "https://bootswatch.com/5/quartz/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/quartz/bootstrap.min.css",
      scss: "https://bootswatch.com/5/quartz/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/quartz/_variables.scss",
    },
    {
      name: "Sandstone",
      description: "A touch of warmth",
      thumbnail: "https://bootswatch.com/sandstone/thumbnail.png",
      preview: "https://bootswatch.com/sandstone/",
      css: "https://bootswatch.com/5/sandstone/bootstrap.css",
      cssMin: "https://bootswatch.com/5/sandstone/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/sandstone/bootstrap.min.css",
      scss: "https://bootswatch.com/5/sandstone/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/sandstone/_variables.scss",
    },
    {
      name: "Simplex",
      description: "Mini and minimalist",
      thumbnail: "https://bootswatch.com/simplex/thumbnail.png",
      preview: "https://bootswatch.com/simplex/",
      css: "https://bootswatch.com/5/simplex/bootstrap.css",
      cssMin: "https://bootswatch.com/5/simplex/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/simplex/bootstrap.min.css",
      scss: "https://bootswatch.com/5/simplex/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/simplex/_variables.scss",
    },
    {
      name: "Slate",
      description: "Shades of gunmetal gray",
      thumbnail: "https://bootswatch.com/slate/thumbnail.png",
      preview: "https://bootswatch.com/slate/",
      css: "https://bootswatch.com/5/slate/bootstrap.css",
      cssMin: "https://bootswatch.com/5/slate/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/slate/bootstrap.min.css",
      scss: "https://bootswatch.com/5/slate/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/slate/_variables.scss",
    },
    {
      name: "Solar",
      description: "A spin on Solarized",
      thumbnail: "https://bootswatch.com/solar/thumbnail.png",
      preview: "https://bootswatch.com/solar/",
      css: "https://bootswatch.com/5/solar/bootstrap.css",
      cssMin: "https://bootswatch.com/5/solar/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/solar/bootstrap.min.css",
      scss: "https://bootswatch.com/5/solar/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/solar/_variables.scss",
    },
    {
      name: "Superhero",
      description: "The brave and the blue",
      thumbnail: "https://bootswatch.com/superhero/thumbnail.png",
      preview: "https://bootswatch.com/superhero/",
      css: "https://bootswatch.com/5/superhero/bootstrap.css",
      cssMin: "https://bootswatch.com/5/superhero/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/superhero/bootstrap.min.css",
      scss: "https://bootswatch.com/5/superhero/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/superhero/_variables.scss",
    },
    {
      name: "United",
      description: "Ubuntu orange and unique font",
      thumbnail: "https://bootswatch.com/united/thumbnail.png",
      preview: "https://bootswatch.com/united/",
      css: "https://bootswatch.com/5/united/bootstrap.css",
      cssMin: "https://bootswatch.com/5/united/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/united/bootstrap.min.css",
      scss: "https://bootswatch.com/5/united/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/united/_variables.scss",
    },
    {
      name: "Vapor",
      description: "A cyberpunk aesthetic",
      thumbnail: "https://bootswatch.com/vapor/thumbnail.png",
      preview: "https://bootswatch.com/vapor/",
      css: "https://bootswatch.com/5/vapor/bootstrap.css",
      cssMin: "https://bootswatch.com/5/vapor/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/vapor/bootstrap.min.css",
      scss: "https://bootswatch.com/5/vapor/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/vapor/_variables.scss",
    },
    {
      name: "Yeti",
      description: "A friendly foundation",
      thumbnail: "https://bootswatch.com/yeti/thumbnail.png",
      preview: "https://bootswatch.com/yeti/",
      css: "https://bootswatch.com/5/yeti/bootstrap.css",
      cssMin: "https://bootswatch.com/5/yeti/bootstrap.min.css",
      cssCdn:
        "https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/yeti/bootstrap.min.css",
      scss: "https://bootswatch.com/5/yeti/_bootswatch.scss",
      scssVariables: "https://bootswatch.com/5/yeti/_variables.scss",
    },
  ],
};

// Quartz
// Sandstone
// Simplex
// solar
// superhero
// United
// > darkly
// flatly
///!!!  Vapor
// Yeti
// slate
import '@shopify/polaris/build/esm/styles.css';


import "./css/quartz/bootstrap.css";


import "./App.css";

import store from "./redux/store";

export const getQueries = (state) => state.queries;

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ReduxQueryProvider queriesSelector={getQueries}>
      <App />
    </ReduxQueryProvider>
  </Provider>
);
