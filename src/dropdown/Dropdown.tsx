import * as React from "react";

import { OrderedMap } from "immutable";

import { ReactComponent as Chevron } from "./icon-dropdown.svg";

import "./styles.scss";

// tslint:disable: react-unused-props-and-state
interface Props {
    selected: { value: string, render: React.ReactNode };
    options: Map<string, React.ReactNode>;
    setValue(value: string): void;
}
export class Dropdown extends React.Component<Props, State> {
    private ref: HTMLDivElement | null = null;

    constructor(props: Props) {
        super(props);
        this.state = {
            shown: false,
        };
    }

    public render = () => {
        const { shown } = this.state;
        const { selected, options } = this.props;
        return <div
            className="header--group"
            ref={this.setRef}
        >
            <div className="header--selected" role="menuitem" onClick={this.toggle}>
                <span>{selected.render}</span><Chevron style={{ opacity: 0.6 }} />
            </div>
            {shown ?
                <div className="header--dropdown--spacing header--dropdown--options">
                    <ul className="header--dropdown">
                        {
                            OrderedMap(options).map((render, value) => <li
                                key={value}
                                role="button"
                                data-id={value}
                                className={`${value === selected.value ?
                                    "header--dropdown--selected" :
                                    ""} header--dropdown--option`}
                                onClick={this.onClick}
                            >
                                {render}
                            </li>).valueSeq().toArray()}
                    </ul>
                </div> : null
            }
        </div>;
    }

    private readonly setRef = (ref: HTMLDivElement) => {
        this.ref = ref;
    }

    private readonly clickAway = (event: any) => {
        // tslint:disable-next-line: no-any
        console.log("!");
        if ((this.ref && !this.ref.contains(event.target))) {
            this.setState({ shown: false });
        }
        document.removeEventListener("mousedown", this.clickAway);
        // @ts-ignore
    }

    private toggle = () => {
        const newShown = !this.state.shown;
        this.setState({ shown: newShown });

        if (newShown) {
            document.addEventListener("mousedown", this.clickAway);
        } else {
            console.log("removeEventListener");
            document.removeEventListener("mousedown", this.clickAway);
        }
    }

    private onClick = (e: React.MouseEvent<HTMLLIElement>): void => {
        const id = e.currentTarget.dataset ? e.currentTarget.dataset.id : undefined;
        if (id) {
            this.props.setValue(id);

            // Hide dropdown
            this.setState({ shown: false });
        }
    }
};

interface State {
    shown: boolean;
}

// tslint:disable: react-unused-props-and-state
interface Props {
    selected: { value: string, render: React.ReactNode },
    options: Map<string, React.ReactNode>,
    setValue(value: string): void;
}


// Stateless version:

// export const Dropdown = (props: Props) => {
//     const [shown, setShown] = React.useState(false);
//     const ref = React.useRef(null as HTMLDivElement | null);
//     const { selected, setValue, options } = props;

//     const clickAway: EventListener = (event) => {
//         if ((ref.current && !ref.current.contains(event.target as Node))) {
//             setShown(false);
//             document.removeEventListener("mousedown", clickAway, false);
//         }
//     };

//     const toggle = () => {
//         const newShown = !shown;
//         setShown(newShown);

//         if (newShown) {
//             document.addEventListener("mousedown", clickAway);
//         } else {
//             document.removeEventListener("mousedown", clickAway);
//         }

//     };

//     const onClick = (e: React.MouseEvent<HTMLLIElement>): void => {
//         const id = e.currentTarget.dataset ? e.currentTarget.dataset.id : undefined;
//         if (id) {
//             setValue(id);

//             // Hide dropdown
//             setShown(false);
//         }
//     };

//     return <div
//         className="header--group"
//         ref={ref}
//     >
//         <div className="header--selected" role="menuitem" onClick={toggle}>
//             <span>{selected.render}</span><Chevron style={{ opacity: 0.6 }} />
//         </div>
//         {shown ?
//             <div className="header--dropdown--spacing header--dropdown--options">
//                 <ul className="header--dropdown">
//                     {
//                         OrderedMap(options).map((render, value) => <li
//                             key={value}
//                             role="button"
//                             data-id={value}
//                             className={`${value === selected.value ?
//                                 "header--dropdown--selected" :
//                                 ""} header--dropdown--option`}
//                             onClick={onClick}
//                         >
//                             {render}
//                         </li>).valueSeq().toArray()}
//                 </ul>
//             </div> : null
//         }
//     </div>;
// };
