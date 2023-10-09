import { join } from "path";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "./components/App";
import template from "./template";

const server = express();

server.use("/assets", express.static(join(__dirname, "assets")));

server.get("/", async (req, res) => {
  const appString = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
  );

  res.send(
    template({
      body: appString,
      title: "Hello World from the server",
      initialState: JSON.stringify({}),
    }),
  );
});

server.listen(8080);

/* eslint-disable no-console */
console.log("listening on 8080");
/* eslint-enable no-console */
