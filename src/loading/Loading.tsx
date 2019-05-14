import * as React from "react";

import "./styles.scss";

/**
 * Loading is a visual component that renders a spinning animation
 */
export const Loading = (inProps: Props): JSX.Element => {
    const props: Props = {};
    Object.keys(inProps).map((prop => {
        if (prop !== "alt") {
            props[prop] = inProps[prop];
        }
        return null;
    }));
    return (
        <div {...props} className={`loading lds-dual-ring ${inProps.alt ? "alt" : ""} ${props.className}`} />
    );
};

// tslint:disable: react-unused-props-and-state
interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    alt?: boolean;
}
