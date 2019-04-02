import * as React from "react";

import { SelectMarket } from "../SelectMarket";

import { OrderedMap } from "immutable";

type Token = string;
type MarketPair = string;

export const Tokens = new Map<Token, { symbol: string; name: string }>()
  .set("DAI", { symbol: "DAI", name: "Dai" })
  .set("BTC", { symbol: "BTC", name: "Bitcoin" })
  .set("ETH", { symbol: "ETH", name: "Ethereum" })
  .set("REN", { symbol: "REN", name: "Ren" })
  .set("TUSD", { symbol: "TUSD", name: "TrueUSD" })
  .set("WBTC", { symbol: "WBTC", name: "Wrapped Bitcoin" });

export const MarketPairs = OrderedMap<
  MarketPair,
  { symbol: string; quote: string; base: string }
>()
  .set("BTC/DAI", { symbol: "BTC/DAI", quote: "DAI", base: "BTC" })
  .set("ETH/DAI", { symbol: "ETH/DAI", quote: "DAI", base: "ETH" })
  .set("ETH/BTC", { symbol: "ETH/BTC", quote: "BTC", base: "ETH" })
  .set("WBTC/BTC", { symbol: "WBTC/BTC", quote: "BTC", base: "WBTC" });

export const getMarket = (
  left: Token,
  right: Token
): MarketPair | undefined => {
  return (
    MarketPairs.findKey(
      marketDetails =>
        marketDetails.base === left && marketDetails.quote === right
    ) ||
    MarketPairs.findKey(
      marketDetails =>
        marketDetails.base === right && marketDetails.quote === left
    ) ||
    undefined
  );
};

export default () => {
  const [top, setTop] = React.useState("BTC");
  const [bottom, setBottom] = React.useState("DAI");

  return <div className="select-market--example">
    <SelectMarket
      top={true}
      thisToken={top}
      otherToken={bottom}
      allTokens={Tokens}
      key={"top"}
      onChange={setTop}
      getMarket={getMarket}
    />
    <SelectMarket
      top={false}
      thisToken={bottom}
      otherToken={top}
      allTokens={Tokens}
      key={"bottom"}
      onChange={setBottom}
      getMarket={getMarket}
    />
  </div>;
}
