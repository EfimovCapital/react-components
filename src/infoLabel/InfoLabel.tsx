import * as React from "react";

import "./styles.scss";

import Info from "./info.svg";
import Warning from "./warning.svg";

export enum LabelLevel {
    Info = "info",
    Warning = "warning"
}

/**
 * InfoLabel is a visual component for displaying an information message for
 * another component
 */
export class InfoLabel extends React.Component<Props, State> {
    /**
     * The main render function.
     * @dev Should have minimal computation, loops and anonymous functions.
     */
    public render(): React.ReactNode {
        const { level, children } = this.props;
        const icon = level === LabelLevel.Warning ? Warning : Info;
        return (
            <div className="label">
                <img className="label--icon" src={icon} />
                <div className="label--message">{children ? children : ""}</div>
            </div>
        );
    }
}

interface Props {
    level?: LabelLevel;
    children?: React.ReactNode;
}

interface State {
}
