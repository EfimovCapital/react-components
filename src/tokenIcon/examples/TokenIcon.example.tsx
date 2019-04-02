import * as React from "react";

import {
    storiesOf
} from "@storybook/react";

import { TokenIcon } from "../src/index";


export const currencyIcon = storiesOf("TokenIcon", module);

currencyIcon.add("List of token icons", () => {
    return [
        <p><TokenIcon token={"BTC"} /> BTC</p>,
        <p><TokenIcon token={"DAI"} /> DAI</p>,
        <p><TokenIcon token={"DGX"} /> DGX</p>,
        <p><TokenIcon token={"ETH"} /> ETH</p>,
        <p><TokenIcon token={"OMG"} /> OMG</p>,
        <p><TokenIcon token={"REN"} /> REN</p>,
        <p><TokenIcon token={"TUSD"} /> TUSD</p>,
        <p><TokenIcon token={"WBTC"} /> WBTC</p>,
        <p><TokenIcon token={"ZEC"} /> ZEC</p>,
        <p><TokenIcon token={"ZRX"} /> ZRX</p>,
    ];
});
