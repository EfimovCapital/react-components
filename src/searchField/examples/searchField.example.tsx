import * as React from "react";

import { SearchField, escapeRegExp } from "../SearchField";

/**
 * ViewSwapperDBalances is a visual component for displaying the user's balances
 * held by the atomic-swap software, SwapperD
 */
export default () => {
    const [searchInput, setSearchInput] = React.useState("")

    const entries = ["Apple", "Ape", "App", "Art", "Banana", "Barn"];


    const generateRows = (): React.ReactNode[] => {
        const searchTest = new RegExp(`${true ? "^" : ""}${escapeRegExp(searchInput)}`, "i");

        return entries
            .filter(entry => searchTest.test(entry))
            .map(entry => <p>{entry}</p>);
    }

    return <div>
        <SearchField placeholder="Search words" onChange={setSearchInput} value={searchInput} autoFocus={true} />
        {generateRows()}
    </div>;
}
