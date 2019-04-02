import * as React from "react";

import { Console } from "../Console";
import { List } from "immutable";

export default () => <Console
    logs={List([
        <span key={0}>AB</span>,
        <span key={1}>CD</span>,
        <span key={2}>EF</span>,
        <span key={3}>GH</span>,
        <span key={4}>IJ</span>,
        <span key={5}>KL</span>,
        <span key={6}>MN</span>,
        <span key={7}>OP</span>,
        <span key={8}>QR</span>,
        <span key={9}>ST</span>,
        <span key={10}>UV</span>,
        <span key={11}>WX</span>,
        <span key={12}>YZ.</span>,
    ])}
/>;
