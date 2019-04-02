import * as React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";

import blockyExample from "./blocky/examples/blocky.example";
import consoleExample from "./console/examples/console.example";
import currencyIconExample from "./currencyIcon/examples/currencyIcon.example";
import infoLabelExample from "./infoLabel/examples/infoLabel.example";
import loadingExample from "./loading/examples/loading.example";
import searchFieldExample from "./searchField/examples/searchField.example";
import selectMarketExample from "./selectMarket/examples/selectMarket.example";
import tokenIconExample from "./tokenIcon/examples/tokenIcon.example";

import "./styles/styles.scss";

const examples = {
  blocky: [blockyExample],
  console: [consoleExample],
  currencyIcon: [currencyIconExample],
  infoLabel: [infoLabelExample],
  loading: [loadingExample],
  searchField: [searchFieldExample],
  selectMarket: [selectMarketExample],
  tokenIcon: [tokenIconExample],
}

function Home() {
  console.log(examples);
  return <div className="example-group">
    {Object.keys(examples).map(exampleGroup => {
      const title = exampleGroup.replace(/([A-Z])/, " $1").replace(/^[a-z]/, (l) => l.toUpperCase());
      return examples[exampleGroup].map((example: React.ComponentClass, index: number) =>
        <Link className="example--preview" to={`/${exampleGroup}-${index + 1}`} key={`/${exampleGroup}-${index}`}>
          <div className="example-group--box">
            <h3>{title}</h3>
            <div className="example-group--body">
              <div className="example--preview--inner">{React.createElement(example)}</div>
            </div>
          </div>
        </Link>
      )
    }
    )}
  </div >;
}

function App() {
  return (
    <HashRouter>
      <div className="examples">
        <Link to="/"><p className="home-button">Home</p></Link>
        <Route path="/" exact component={Home} />
        {Object.keys(examples).map(exampleGroup => <div key={exampleGroup}>
          {
            examples[exampleGroup].map((example: React.ComponentClass, index: number) =>
              <Route path={`/${exampleGroup}-${index + 1}`} component={example} />
            )
          }
        </div>
        )}
      </div>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
