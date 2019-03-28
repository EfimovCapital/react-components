import * as React from "react";

import {
    storiesOf
} from "@storybook/react";

import { InfoLabel, LabelLevel } from "../src/index";

import "./styles/styles.scss";

export const infoLabel = storiesOf("InfoLabel", module);

infoLabel.add("Info label", () => {
    return <p style={{ marginTop: "50px" }}>Hover to see information: <InfoLabel>Some information</InfoLabel></p>;
});


infoLabel.add("Warning label", () => {
    return <p style={{ marginTop: "50px" }}>Hover to the warning: <InfoLabel level={LabelLevel.Warning}>A warning</InfoLabel></p>;
});
