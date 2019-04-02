import * as React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";

import reactElementToJSXString from 'react-element-to-jsx-string';

import blockyExample from "./blocky/examples/blocky.example";
import consoleExample from "./console/examples/console.example";
import currencyIconExample from "./currencyIcon/examples/currencyIcon.example";
import infoLabelExample from "./infoLabel/examples/infoLabel.example";
import loadingExample from "./loading/examples/loading.example";
import searchFieldExample from "./searchField/examples/searchField.example";
import selectMarketExample from "./selectMarket/examples/selectMarket.example";
import tokenIconExample from "./tokenIcon/examples/tokenIcon.example";

// import SyntaxHighlighter from "react-syntax-highlighter";
// import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/prism-light";
// import jsx from 'react-syntax-highlighter/dist/esm//languages/prism/jsx';
// import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/prism-light";
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

registerLanguage('jsx', jsx);

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
  return <div className="example-group">
    {Object.keys(examples).map(exampleGroup => {
      const title = exampleGroup.replace(/([A-Z])/, " $1").replace(/^[a-z]/, (l) => l.toUpperCase());
      return examples[exampleGroup].map((example: () => JSX.Element, index: number) =>
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


const withSourceCode = (element: () => JSX.Element) => {
  const jsx = element();
  return () => <>
    {jsx}
    <details className="example--source-code">
      <summary>Source code</summary>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {reactElementToJSXString(jsx)}
      </SyntaxHighlighter>
    </details>
  </>;
}

function App() {
  return (
    <HashRouter>
      <div className="examples">
        <Link to="/"><p className="home-button">Home</p></Link>
        <Route path="/" exact component={Home} />
        {Object.keys(examples).map(exampleGroup => <div key={exampleGroup}>
          {
            examples[exampleGroup].map((example: () => JSX.Element, index: number) =>
              <Route path={`/${exampleGroup}-${index + 1}`} component={withSourceCode(example)} />
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
