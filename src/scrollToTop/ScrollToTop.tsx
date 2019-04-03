import * as React from "react";

import { withRouter, RouteComponentProps } from "react-router-dom";

// Scroll restoration based on https://reacttraining.com/react-router/web/guides/scroll-restoration
export const ScrollToTop: React.ComponentClass = withRouter(
    // tslint:disable-next-line:no-any
    class ScrollToTopWithoutRouter extends React.Component<RouteComponentProps<any>> {
        // tslint:disable-next-line:no-any
        public componentDidUpdate(prevProps: Readonly<RouteComponentProps<any>>): void {
            if (this.props.location !== prevProps.location) {
                window.scrollTo(0, 0);
            }
        }

        /**
         * The main render function.
         * @dev Should have minimal computation, loops and anonymous functions.
         */
        public render(): React.ReactNode {
            return <></>;
        }
    }
);
