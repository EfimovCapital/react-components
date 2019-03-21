import * as React from "react";

import { css } from "emotion";
import { ControlProps } from "react-select/lib/components/Control";
import { MenuListProps } from "react-select/lib/components/Menu";
import { OptionProps } from "react-select/lib/components/Option";
import { SingleValueProps } from "react-select/lib/components/SingleValue";

import { TokenIcon } from "../index";

export interface OptionType {
    label: string;
    field?: "receiveToken" | "sendToken";
    name?: string;
    // tslint:disable-next-line: no-any no-reserved-keywords
    symbol?: any;
    value?: string;
    isDisabled?: boolean;
    options?: OptionType[];
}

export const CustomMenuList = (props: MenuListProps) => {
    const { children, innerRef } = props;
    return (
        <div
            ref={innerRef}
            className="Select-dropdown"
        >
            {children}
        </div>
    );
};

export const CustomControl = <X extends OptionType>(props: ControlProps<X>) => {
    const { children, cx, getStyles, className, isDisabled, isFocused, innerRef, innerProps } = props;
    // tslint:disable-next-line: no-any
    const { menuIsOpen } = (props as any);
    return (
        <div
            ref={innerRef}
            className={`${(cx(css(getStyles("control", props)), {
                control: true,
                "control--is-disabled": isDisabled,
                "control--is-focused": isFocused,
                "control--menu-is-open": menuIsOpen
            }, className) || "")} Select-control`}
            {...innerProps}
        >
            {children}
        </div>
    );
};

export const CustomValue = <X extends OptionType>(props: SingleValueProps<X>) => {
    const { className, cx, getStyles, isDisabled, innerProps, children } = props;

    const option = props.data;

    return (
        <div
            className={`${cx(
                // tslint:disable-next-line: no-any
                css(getStyles("singleValue", props)),
                {
                    "single-value": true,
                    "single-value--is-disabled": isDisabled
                },
                className
            )} Select-value`}
            {...innerProps}
        >
            {option.value &&
                <TokenIcon token={option.value} />
            }
            {children}
        </div>
    );
};

export const CustomOption = <X extends OptionType>(props: OptionProps<X>) => {
    const { children, className, cx, getStyles, isDisabled, isFocused, isSelected, innerRef, innerProps } = props;

    const option = props.data;

    return (
        <div
            ref={innerRef}
            className={`${cx(
                css(getStyles("option", props)),
                {
                    option: true,
                    "option--is-disabled": isDisabled,
                    "option--is-focused": isFocused,
                    "option--is-selected": isSelected,
                },
                className
            ) || ""} Select--option`}
            {...innerProps}
        >
            <TokenIcon token={option.value} />
            {children}
            <span>{option.name}</span>
        </div >
    );
};
