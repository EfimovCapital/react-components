import * as React from "react";

import Select from "react-select";

import "./styles.scss";

import { CustomOption, CustomValue, OptionType, CustomGroup } from "./Select";

type Token = string;
type MarketPair = string;

/**
 * SelectMarket allows the user to select a market from two token dropdowns
 */
export class SelectMarket extends React.Component<Props, State> {

    /**
     * The main render function.
     * @dev Should have minimal computation, loops and anonymous functions.
     */
    public render(): React.ReactNode {
        // Retrieve the order inputs from the store.
        const { thisToken, otherToken, top } = this.props;
        const customStyles = {
            // tslint:disable-next-line: no-any
            option: (provided: any, state: any) => ({
                ...provided,
                backgroundColor: state.isSelected ? "rgba(0, 27, 58, 0.1)" : "transparent",
                "&:hover": {
                    backgroundColor: "rgba(219, 224, 232, 0.3)",
                },
            }),
        };

        if (top) {
            const leftCurrencies = this.listCurrencies();

            return (
                <div className="select--market">
                    <Select
                        className="Select--currency"
                        classNamePrefix="Select--currency"
                        name="quoteCode"
                        value={leftCurrencies.find((option => option.value === thisToken)) || null}
                        onChange={this.handleChange}
                        options={leftCurrencies}
                        components={{
                            SingleValue: CustomValue,
                            Option: CustomOption,
                            Group: CustomGroup,
                        }}
                        isClearable={false}
                        backspaceRemovesValue={false}
                        styles={customStyles}
                    // isDisabled={leftCurrencies.length <= 1}
                    />

                </div>
            );
        } else {
            const rightCurrencies = this.listPairs(otherToken);
            let list = rightCurrencies;
            if (rightCurrencies[0].options && rightCurrencies[1].options) {
                list = rightCurrencies[0].options.concat(rightCurrencies[1].options);
            }
            const error = !this.props.getMarket(otherToken, thisToken);

            return <div className={`select--market select--market--second ${error ? "select--market--error" : ""}`}>
                <Select
                    className="Select--currency"
                    classNamePrefix="Select--currency"
                    name="baseCode"
                    value={list.find((option => option.value === thisToken)) || null}
                    onChange={this.handleChange}
                    options={rightCurrencies}
                    // menuIsOpen
                    components={{
                        SingleValue: CustomValue,
                        Option: CustomOption,
                        Group: CustomGroup,
                    }}
                    isClearable={false}
                    backspaceRemovesValue={false}
                    styles={customStyles}
                // isDisabled={rightCurrencies.length <= 1}
                /></div>;
        }
    }

    // tslint:disable-next-line:no-any
    private readonly handleChange = (event: any): void => {
        const newToken = event.value;
        this.props.onChange(newToken);
    }

    private readonly listCurrencies = (): OptionType[] => {
        const list: OptionType[] = [];

        this.props.allTokens.forEach(({ symbol, name }, token: Token) => {
            list.push({
                field: "sendToken",
                label: `${symbol}`,
                name,
                symbol,
                value: token,
            });
        });
        return list;
    }

    private readonly listPairs = (thisToken: Token): OptionType[] => {

        const availableList: OptionType[] = [];
        const unavailableList: OptionType[] = [];

        this.props.allTokens.forEach(({ symbol, name }, token) => {
            const enabled = (this.props.getMarket(thisToken, token));

            const list = enabled ? availableList : unavailableList;
            list.push({
                field: "receiveToken",
                label: `${symbol}`,
                name,
                symbol,
                isDisabled: !enabled,
                value: token,
            });
        });
        return [
            {
                label: "Available",
                options: availableList,
            },
            {
                label: "Not Available",
                options: unavailableList,
            },
        ];
    }
}

interface Props {
    top: boolean;
    thisToken: Token;
    otherToken: Token;
    // tslint:disable-next-line: no-reserved-keywords
    allTokens: Map<Token, { name: string; symbol: string }>;
    onChange(token: Token): void;
    getMarket(left: Token, right: Token): MarketPair | undefined;
}

interface State {
}
