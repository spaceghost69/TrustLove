import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Provider as ReduxQueryProvider } from "redux-query-react";

import App from "./App";


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
