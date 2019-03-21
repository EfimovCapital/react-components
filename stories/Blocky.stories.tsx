import * as React from "react";

import {
    storiesOf
} from "@storybook/react";

import { Blocky } from "../src/index";

import "./styles/styles.scss";

export const blocky = storiesOf("Blocky", module);

blocky.add("Basic blocky", () => {
    return <Blocky address="0x01234" />;
});

blocky.add("Advanced blocky", () => {
    return <Blocky address="0x11111111111" />;
},
    {
        info: {
            text: `

  ### Advanced

  This shows advanced usage of Blocky.

`,
            styles: {
                header: {
                    width: '100%',
                }
            },
        },
    }
);