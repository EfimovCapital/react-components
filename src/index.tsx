import * as React from "react";
import { render } from "react-dom";

import { SelectMarketExample } from "./selectMarket/Example";

function App() {
  return (
    <div className="App">
      <h1>Example:</h1>
      <SelectMarketExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
