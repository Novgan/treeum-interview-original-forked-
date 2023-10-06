import React from "react";
import { hydrate } from "react-dom";
import Root from "./components/Root";

hydrate(<Root env="client" store={store} />, document.getElementById("root"));
