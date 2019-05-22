import * as React from "react";

import { TokenIcon } from "../TokenIcon";

export default () => <div style={{ background: "#333", color: "white", padding: "10px" }}>
    <p><TokenIcon token={"BTC"} white={true} />BTC</p>
    <p><TokenIcon token={"DAI"} white={true} />DAI</p>
    <p><TokenIcon token={"DGX"} white={true} />DGX</p>
    <p><TokenIcon token={"ETH"} white={true} />ETH</p>
    <p><TokenIcon token={"OMG"} white={true} />OMG</p>
    <p><TokenIcon token={"REN"} white={true} />REN</p>
    <p><TokenIcon token={"TUSD"} white={true} />TUSD</p>
    <p><TokenIcon token={"WBTC"} white={true} />WBTC</p>
    <p><TokenIcon token={"ZEC"} white={true} />ZEC</p>
    <p><TokenIcon token={"ZRX"} white={true} />ZRX</p>

    <p><TokenIcon token={"GUSD"} white={true} />GUSD</p>
    <p><TokenIcon token={"PAX"} white={true} />PAX</p>
    <p><TokenIcon token={"USDT"} white={true} />USDT</p>
</div>;
