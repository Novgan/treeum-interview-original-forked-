import React, { memo } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, StaticRouter } from "react-router-dom";

import App from "./App";

function Root({ env, location, store }) {
  return (
    <ReduxProvider store={store}>
      {env === "server" ? (
        <StaticRouter location={location}>
          <App />
        </StaticRouter>
      ) : (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )}
    </ReduxProvider>
  );
}

export default memo(Root);
