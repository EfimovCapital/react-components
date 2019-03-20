import * as React from "react";

import {
    storiesOf
} from "@storybook/react";

import { InfoLabel, LabelLevel } from "../src/index";

import "./styles.css";

export const infoLabel = storiesOf("InfoLabel", module);

infoLabel.add("Info label", () => {
    return <p>Hover to see information: <InfoLabel>Some information</InfoLabel></p>;
});


infoLabel.add("Warning label", () => {
    return <p>Hover to the warning: <InfoLabel level={LabelLevel.Warning}>A warning</InfoLabel></p>;
});
