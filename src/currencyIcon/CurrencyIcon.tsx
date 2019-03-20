import * as React from "react";

import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export enum Currency {
    AUD = "aud",
    CNY = "cny",
    GBP = "gbp",
    EUR = "eur",
    JPY = "jpy",
    KRW = "krw",
    RUB = "rub",
    USD = "usd",

    ETH = "eth",
    BTC = "btc",
}

export const currencies = [
    { currency: Currency.AUD, description: "Australian Dollar (AUD)", },
    { currency: Currency.GBP, description: "British Pound (GBP)", },
    { currency: Currency.CNY, description: "Chinese Yuan (CNY)", },
    { currency: Currency.EUR, description: "Euro (EUR)", },
    { currency: Currency.JPY, description: "Japanese Yen (JPY)", },
    { currency: Currency.KRW, description: "Korean Won (KRW)", },
    { currency: Currency.RUB, description: "Russian Ruble (RUB)", },
    { currency: Currency.USD, description: "US Dollar (USD)", },

    { currency: Currency.ETH, description: "Ethereum (ETH)", },
    { currency: Currency.BTC, description: "Bitcoin (BTC)", },
];

export class CurrencyIcon extends React.Component<Props, State> {
    public render = (): JSX.Element => {
        const { currency } = this.props;

        // Note: Typescript will warn if the switch statement is non-exhaustive

        // tslint:disable-next-line: switch-default
        switch (currency) {
            case Currency.AUD:
                return <>$</>;
            case Currency.CNY:
                return <>¥</>;
            case Currency.GBP:
                return <>£</>;
            case Currency.EUR:
                return <>€</>;
            case Currency.JPY:
                return <>¥</>;
            case Currency.KRW:
                return <>₩</>;
            case Currency.RUB:
                return <>₽</>;
            case Currency.USD:
                return <>$</>;
            case Currency.ETH:
                return <FontAwesomeIcon className="currency-icon" icon={faEthereum} />;
            case Currency.BTC:
                return <FontAwesomeIcon className="currency-icon" icon={faBitcoin} />;
        }

    }
}

interface Props {
    currency: Currency;
}

interface State {
}
