import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Task1 from "./Task1";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/task1" component={Task1} />
    </Switch>
  );
}

export default App;
