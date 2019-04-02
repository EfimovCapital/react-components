import * as React from "react";

import { SearchField, escapeRegExp } from "../SearchField";

/**
 * ViewSwapperDBalances is a visual component for displaying the user's balances
 * held by the atomic-swap software, SwapperD
 */
export class SearchFieldExample extends React.Component<{}, State> {
    private entries = ["Apple", "Ape", "App", "Art", "Banana", "Barn"];

    public constructor(props: {}, context: object) {
        super(props, context);
        this.state = {
            searchInput: "",
        };
    }

    /**
     * The main render function.
     * @dev Should have minimal computation, loops and anonymous functions.
     */
    public render(): React.ReactNode {
        return (
            <div>
                <SearchField placeholder="Search words" onChange={this.onSearchChange} value={this.state.searchInput} />
                {this.generateRows()}
            </div>
        );
    }

    private generateRows(): React.ReactNode[] {
        const searchTest = new RegExp(`${true ? "^" : ""}${escapeRegExp(this.state.searchInput)}`, "i");

        return this.entries
            .filter(entry => searchTest.test(entry))
            .map(entry => <p>{entry}</p>);
    }

    private readonly onSearchChange = (searchInput: string): void => {
        this.setState({ searchInput });
    }
}

interface State {
    searchInput: string;
}
