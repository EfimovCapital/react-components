import * as React from "react";

import {
    storiesOf
} from "@storybook/react";

import "./styles.css";

import { Blocky } from "../src/Blocky";

const blocky = storiesOf("Blocky", module);

blocky.add("Basic blocky", () => {
    return <Blocky address="0x01234" />;
});

blocky.add("Advanced blocky", () => {
    return <Blocky address="0x11111111111" />;
},
    {
        inline: true,
        info: {
            text: `

  ### Advanced

  This shows advanced usage of Blocky.

`,
        },
    }
);
