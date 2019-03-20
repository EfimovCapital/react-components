import * as React from "react";

import "./styles.scss";

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
        const iconType = level || LabelLevel.Info;
        return (
            <div className="label">
                <div className={`label--icon ${iconType}--icon`} />
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
