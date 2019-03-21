import * as React from "react";

import Magnify from "./magnify.svg";

import "./styles.scss";

export class SearchField extends React.Component<Props> {
    /**
     * The main render function.
     * @dev Should have minimal computation, loops and anonymous functions.
     */
    public render(): React.ReactNode {
        const { className, value, placeholder } = this.props;

        return <div className={`search-bar ${className ? className : ""}`}>
            <img src={Magnify} className="search-bar--icon" />
            <input
                type="text"
                role="textbox"

                placeholder={placeholder}
                onChange={this.handleInput}
                value={value}
            />
        </div>;
    }

    private readonly handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
        const element = (event.target as HTMLInputElement);
        this.props.onChange(element.value);
    }
}

interface Props {
    value: string;
    placeholder: string;
    className?: string;
    onChange(input: string): void;
}

export const escapeRegExp = (text: string) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};