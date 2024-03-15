import { useState } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Siparis from "./components/Siparis";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/siparis">
          <Siparis />
        </Route>
      </Switch>
    </>
  );
}

export default App;
