import * as React from "react";

import {
    storiesOf
} from "@storybook/react";

import { Loading } from "../Loading";


export const loading = storiesOf("Loading", module);

loading.add("Loading", () => {
    return <Loading />;
});

loading.add("Inverted", () => {
    return <div style={{ background: "black", padding: "30px", }}>
        <Loading alt={true} />
    </div>;
});
