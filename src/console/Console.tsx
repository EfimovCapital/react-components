import * as React from "react";

import { List } from "immutable";

import "./styles.scss";

/**
 * Console is a component for showing a scrolling list of Elements.
 * When a new item is added, it automatically scrolls to to the end of the list.
 */
export class Console extends React.Component<Props, State> {
    private bottomElement: HTMLElement | null = null;

    public render = (): JSX.Element => {
        return (
            <div role="log" className="console" onClick={this.onClickHandler}>
                {this.props.logs}
                <br className="console--bottom" ref={this.updateBottomElement} />
            </div>);
    }

    public updateBottomElement = (ref: HTMLBRElement | null) => { this.bottomElement = ref; };

    public componentDidMount = (): void => {
        this.scrollToBottom();
    }

    public componentWillReceiveProps = (): void => {
        this.scrollToBottom();
    }

    private readonly scrollToBottom = (): void => {
        // Render any new logs before scrolling to bottom
        this.forceUpdate(() => {
            if (this.bottomElement) {
                this.bottomElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    private readonly onClickHandler = (_event: React.MouseEvent<HTMLElement>): void => {
        const { level } = this.state;
        this.setState({
            level: level + 1,
        });
    }
}

interface Props {
    logs: List<JSX.Element>;
}

interface State {
    level: number;
}
