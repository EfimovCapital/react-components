import * as React from "react";

import {
    storiesOf
} from "@storybook/react";

import { CurrencyIcon, Currency } from "../CurrencyIcon";

import "./styles/styles.scss";

export const currencyIcon = storiesOf("CurrencyIcon", module);

currencyIcon.add("List of currency icons", () => {
    return [
        <p><CurrencyIcon currency={Currency.AUD} /> AUD</p>,
        <p><CurrencyIcon currency={Currency.CNY} /> CNY</p>,
        <p><CurrencyIcon currency={Currency.EUR} /> EUR</p>,
        <p><CurrencyIcon currency={Currency.GBP} /> GBP</p>,
        <p><CurrencyIcon currency={Currency.JPY} /> JPY</p>,
        <p><CurrencyIcon currency={Currency.KRW} /> KRW</p>,
        <p><CurrencyIcon currency={Currency.RUB} /> RUB</p>,
        <p><CurrencyIcon currency={Currency.USD} /> USD</p>,
        <p><CurrencyIcon currency={Currency.BTC} /> BTC</p>,
        <p><CurrencyIcon currency={Currency.ETH} /> ETH</p>,
    ];
});
