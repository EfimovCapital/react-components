import * as React from "react";

import "./styles.scss";

/**
 * Header is a visual component providing page branding and navigation.
 */
export const Header = ({ logo, menu }: Props) =>
    <div className="header">
        <div className="container">
            <div className="header--logo">
                {logo}
            </div>
            <div className="header--menu">
                {menu}
            </div>
        </div>
    </div>;

// tslint:disable: react-unused-props-and-state
interface Props {
    logo: React.ReactNode;
    menu: React.ReactNode[];
}
