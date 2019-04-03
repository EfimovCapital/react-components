import * as React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";

import reactElementToJSXString from 'react-element-to-jsx-string';

import "./styles/examples.scss";

const titled = (s: string) => s.replace(/([A-Z])/, " $1").replace(/^[a-z]/, (l) => l.toUpperCase());

const examples = {
  basic: {
    blocky: [require("./blocky/examples/1").default],
    console: [require("./console/examples/1").default],
    currencyIcon: [require("./currencyIcon/examples/1").default],
    infoLabel: [require("./infoLabel/examples/1").default],
    loading: [require("./loading/examples/1").default],
    searchField: [require("./searchField/examples/1").default],
    tokenIcon: [require("./tokenIcon/examples/1").default],
    feedback: [require("./feedback/examples/1").default],
  },
  combined: {
    selectMarket: [require("./selectMarket/examples/1").default],
  }
}

function Home() {
  return Object.keys(examples).map(category =>
    <details open={true}>
      <summary>{titled(category)}</summary>
      <div className="example-group">
        {Object.keys(examples[category]).map(exampleGroup => {
          const title = titled(exampleGroup);
          return examples[category][exampleGroup].map((example: () => JSX.Element, index: number) =>
            <Link className="example--preview" to={`/${exampleGroup}-${index + 1}`} key={`/${exampleGroup}-${index}`}>
              <div className="example-group--box">
                <h3>{title}</h3>
                <div className="example-group--body">
                  <div className="example--preview--inner">{React.createElement(example)}</div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </details>
  )
}


const withSourceCode = (element: () => JSX.Element) => {
  const jsx = element();
  return () => <>
    {jsx}
    <details className="example--source-code">
      <summary>Source code</summary>
      <pre><code>
        {reactElementToJSXString(jsx)}
      </code></pre>
    </details>
  </>;
}

function App() {
  return (
    <HashRouter>
      <div className="examples">
        <Link to="/"><p className="home-button">Home</p></Link>
        <Route path="/" exact component={Home} />
        {Object.keys(examples).map(category =>
          Object.keys(examples[category]).map(exampleGroup => <div key={exampleGroup}>
            {
              examples[category][exampleGroup].map((example: () => JSX.Element, index: number) =>
                <Route path={`/${exampleGroup}-${index + 1}`} component={withSourceCode(example)} />
              )
            }
          </div>
          )
        )}
      </div>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
