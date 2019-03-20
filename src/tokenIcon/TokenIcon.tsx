import * as React from "react";

import Info from "../infoLabel/info.svg";

import "./styles.scss";

export class TokenIcon extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render = (): JSX.Element => {
        const { token, className } = this.props;
        let image;
        try {
            // tslint:disable-next-line: non-literal-require
            image = require(`./icons/${token.toLowerCase()}.svg`);
        } catch (_err) {
            image = Info;
        }

        return <img alt="" role="presentation" className={`token--icon ${className ? className : ""}`} src={image} />;
    }
}

interface Props {
    token: string;
    className?: string;
}

interface State {
}
