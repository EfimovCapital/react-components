export { Blocky } from "./blocky/Blocky";
export { Console } from "./console/Console";
export {
  CurrencyIcon,
  Currency,
  currencies
} from "./currencyIcon/CurrencyIcon";
export { InfoLabel, LabelLevel } from "./infoLabel/InfoLabel";
export { Loading } from "./loading/Loading";
export { SearchField } from "./searchField/SearchField";
export { TokenIcon } from "./tokenIcon/TokenIcon";
export { SelectMarket } from "./selectMarket/SelectMarket";

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
