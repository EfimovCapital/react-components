import * as React from "react";

import { ReactComponent as Feedback } from "./feedback.svg";

import "./styles.scss";

export const FeedbackButton: React.SFC<{ url: string }> = (props: { url: string }) => {
    return <a href={props.url} rel="noreferrer" target="_blank" className="feedbackButton">
        <Feedback />
        <span className="feedbackButton--info">Feedback</span>
    </a>;
};
