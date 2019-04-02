import * as React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";

import { SelectMarketExample } from "./selectMarket/Example";
import { BlockyExample } from "./blocky/examples/Blocky.example";

import "./styles/styles.scss";

const examples = {
  selectMarket: [SelectMarketExample],
  blocky: [BlockyExample],
}

function Home() {
  console.log(examples);
  return <div>
    <h1>Home</h1>
    {Object.keys(examples).map(exampleGroup => {
      const title = exampleGroup.replace(/([A-Z])/, " $1").replace(/^[a-z]/, (l) => l.toUpperCase());
      return <div className="example-group" key={exampleGroup}>
        <h2>{title}</h2>
        <div className="example-group--body">
          {
            examples[exampleGroup].map((_example: React.ComponentClass, index: number) =>
              <Link to={`/${exampleGroup}-${index + 1}`}><p key={index}>{title} Example #{index + 1}</p></Link>
            )
          }
        </div>
      </div>;
    })}
  </div>;
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <p><Link to="/">Home</Link></p>
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
