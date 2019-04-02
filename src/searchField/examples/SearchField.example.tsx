import * as React from "react";

import {
    storiesOf
} from "@storybook/react";

import { SearchField } from "../SearchField";
import { SearchFieldExample } from "./SearchFIeldExample";


export const searchField = storiesOf("SearchField", module);

searchField.add("Fixed value", () => {
    return <SearchField placeholder="Placeholder" value="Fixed value." onChange={() => null} />;
});

searchField.add("Search example", () => {
    return <SearchFieldExample />;
});
