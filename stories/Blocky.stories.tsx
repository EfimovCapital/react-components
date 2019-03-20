import * as React from "react";

import {
    storiesOf
} from "@storybook/react";

import { Blocky } from "../src/index";

import BlockyREADME from '../src/blocky/README.md';

import "./styles.css";

export const blocky = storiesOf("Blocky", module)
    .addParameters({
        readme: {
            // Show readme before story
            // content: BlockyREADME,
            // Show readme at the addons panel
            sidebar: BlockyREADME,
        },
    })

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