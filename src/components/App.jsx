import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/task1" component={Task1} />
      <Route exact path="/task2" component={Task2} />
      <Route exact path="/task3" component={Task3} />
    </Switch>
  );
}

export default App;
