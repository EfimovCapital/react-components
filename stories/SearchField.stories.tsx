import * as React from "react";

import {
    storiesOf
} from "@storybook/react";

import { SearchField } from "../src/index";
import { SearchFieldExample } from "../src/searchField/SearchFIeldExample";

import "./styles/styles.scss";

export const searchField = storiesOf("SearchField", module);

searchField.add("Fixed value", () => {
    return <SearchField placeholder="Placeholder" value="Fixed value." onChange={() => null} />;
});

searchField.add("Search example", () => {
    return <SearchFieldExample />;
});
