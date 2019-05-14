import * as React from "react";

import { ReactComponent as Info } from "../infoLabel/info.svg";
import { ReactComponent as BTC } from "./icons/btc.svg";
import { ReactComponent as DAI } from "./icons/dai.svg";
import { ReactComponent as DGX } from "./icons/dgx.svg";
import { ReactComponent as ETH } from "./icons/eth.svg";
import { ReactComponent as OMG } from "./icons/omg.svg";
import { ReactComponent as REN } from "./icons/ren.svg";
import { ReactComponent as TUSD } from "./icons/tusd.svg";
import { ReactComponent as WBTC } from "./icons/wbtc.svg";
import { ReactComponent as ZEC } from "./icons/zec.svg";
import { ReactComponent as ZRX } from "./icons/zrx.svg";

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
  ZRX: ZRX
};

export class TokenIcon extends React.Component<Props, State> {
  public render = (): JSX.Element => {
    const { token, className } = this.props;
    let image;
    if (icons[token]) {
      // tslint:disable-next-line: non-literal-require
      image = icons[token];
    } else {
      image = Info;
    }

    return React.createElement(image, {
      className: `token--icon ${className ? className : ""}`
    });
    // return (
    //   <img
    //     alt=""
    //     role="presentation"
    //     className={`token--icon ${className ? className : ""}`}
    //     src={image}
    //   />
    // );
  };
}

interface Props {
  token: string;
  className?: string;
}

interface State { }
