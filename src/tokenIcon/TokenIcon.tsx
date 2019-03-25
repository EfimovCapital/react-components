import * as React from "react";

import Info from "../infoLabel/info.svg";
import BTC from "./icons/btc.svg";
import DAI from "./icons/dai.svg";
import DGX from "./icons/dgx.svg";
import ETH from "./icons/eth.svg";
import OMG from "./icons/omg.svg";
import REN from "./icons/ren.svg";
import TUSD from "./icons/tusd.svg";
import WBTC from "./icons/wbtc.svg";
import ZEC from "./icons/zec.svg";
import ZRX from "./icons/zrx.svg";

import "./styles.scss";

const icons = {
    BTC: BTC,
    DAI: DAI,
    DGX: DGX,
    ETH: ETH,
    OMG: OMG,
    REN: REN,
    TUSD: TUSD,
    WBTC: WBTC,
    ZEC: ZEC,
    ZRX: ZRX,
};

export class TokenIcon extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render = (): JSX.Element => {
        const { token, className } = this.props;
        let image;
        if (icons[token]) {
            // tslint:disable-next-line: non-literal-require
            image = icons[token];
        } else {
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
