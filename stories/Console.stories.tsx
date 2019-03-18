import * as React from "react";

import {
    storiesOf
} from "@storybook/react";
import { List } from "immutable";

import { Console } from "../src/index";

import "./styles.css";

export const consoleStories = storiesOf("Console", module);

consoleStories.add("Basic console", () => {
    return <Console
        logs={List([
            <span key={0}>ABC</span>,
            <span key={1}>DEF</span>,
            <span key={2}>GHI</span>,
            <span key={3}>JKL</span>,
            <span key={4}>MNO</span>,
            <span key={5}>PQR</span>,
            <span key={6}>STU</span>,
            <span key={7}>VWX</span>,
            <span key={8}>YZ.</span>,
        ])}
    />;
}, { info: { source: false } });
