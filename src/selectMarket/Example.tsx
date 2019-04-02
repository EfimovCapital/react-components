
export const name = "Example";
// import * as React from "react";

// import { SelectMarket } from "./SelectMarket";

// import { OrderedMap } from "immutable";

// type Token = string;
// type MarketPair = string;

// export const Tokens = new Map<Token, { symbol: string; name: string }>()
//   .set("DAI", { symbol: "DAI", name: "Dai" })
//   .set("BTC", { symbol: "BTC", name: "Bitcoin" })
//   .set("ETH", { symbol: "ETH", name: "Ethereum" })
//   .set("REN", { symbol: "REN", name: "Ren" })
//   .set("TUSD", { symbol: "TUSD", name: "TrueUSD" })
//   .set("WBTC", { symbol: "WBTC", name: "Wrapped Bitcoin" });

// export const MarketPairs = OrderedMap<
//   MarketPair,
//   { symbol: string; quote: string; base: string }
// >()
//   .set("BTC/DAI", { symbol: "BTC/DAI", quote: "DAI", base: "BTC" })
//   .set("ETH/DAI", { symbol: "ETH/DAI", quote: "DAI", base: "ETH" })
//   .set("ETH/BTC", { symbol: "ETH/BTC", quote: "BTC", base: "ETH" })
//   .set("WBTC/BTC", { symbol: "WBTC/BTC", quote: "BTC", base: "WBTC" });

// export const getMarket = (
//   left: Token,
//   right: Token
// ): MarketPair | undefined => {
//   return (
//     MarketPairs.findKey(
//       marketDetails =>
//         marketDetails.base === left && marketDetails.quote === right
//     ) ||
//     MarketPairs.findKey(
//       marketDetails =>
//         marketDetails.base === right && marketDetails.quote === left
//     ) ||
//     undefined
//   );
// };

// export default class SelectMarketExample extends React.Component<
//   {},
//   { top: string; bottom: string }
//   > {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       top: "BTC",
//       bottom: "DAI"
//     };
//   }

//   /**
//    * The main render function.
//    * @dev Should have minimal computation, loops and anonymous functions.
//    */
//   public render(): React.ReactNode {
//     return (
//       <div className="select-market--example">
//         <SelectMarket
//           top={true}
//           thisToken={this.state.top}
//           otherToken={this.state.bottom}
//           allTokens={Tokens}
//           key={"top"}
//           onChange={this.onTopChange}
//           getMarket={getMarket}
//         />
//         <SelectMarket
//           top={false}
//           thisToken={this.state.bottom}
//           otherToken={this.state.top}
//           allTokens={Tokens}
//           key={"bottom"}
//           onChange={this.onBottomChange}
//           getMarket={getMarket}
//         />
//       </div>
//     );
//   }

//   private readonly onTopChange = (token: string): void => {
//     this.setState({ top: token });
//   };

//   private readonly onBottomChange = (token: string): void => {
//     this.setState({ bottom: token });
//   };
// }
