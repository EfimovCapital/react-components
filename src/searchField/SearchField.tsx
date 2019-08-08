import * as React from "react";

import { ReactComponent as Magnify } from "./magnify.svg";
import "./styles.scss";

export class SearchField extends React.Component<Props> {
    /**
     * The main render function.
     * @dev Should have minimal computation, loops and anonymous functions.
     */
    public render(): React.ReactNode {
        const { value, placeholder, autoFocus, className, ...props } = this.props;

        return <div {...props} className={["search-bar", className ? className : ""].join(" ")}>
            <Magnify className="search-bar--icon" />
            <input
                type="text"

                placeholder={placeholder}
                onChange={this.handleInput}
                value={value}
                autoFocus={autoFocus}
            />
        </div>;
    }

    private readonly handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
        const element = (event.target as HTMLInputElement);
        this.props.onSearchChange(element.value);
    }
}

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    value: string;
    placeholder: string;
    autoFocus?: boolean;
    onSearchChange(input: string): void;
}

export const escapeRegExp = (text: string) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
