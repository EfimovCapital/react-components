import * as React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";

import { SelectMarketExample } from "./selectMarket/Example";

const selectMarket1 = "/select-market-1";

function Home() {
  return <div>
    <h1>Home</h1>
    <hr />
    <h2>Select Market</h2>
    <p><Link to={selectMarket1}>Select Market Example 1</Link></p>
    <hr />
  </div>;
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <p><Link to="/">Home</Link></p>
        <Route path="/" exact component={Home} />
        <Route path={selectMarket1} exact component={SelectMarketExample} />
      </div>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
