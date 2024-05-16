import { renderToString } from "react-dom/server";

// @ts-ignore
//нужно для ssr
import React from "react";
import App from "./src/App";
import { StaticRouter } from "react-router-dom/server";

async function render(url: string) {
  const renderResult = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  return [renderResult];
}

export { render };
