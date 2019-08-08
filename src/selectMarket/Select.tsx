import * as React from "react";

import { css } from "emotion";
import { OptionProps } from "react-select/lib/components/Option";
import { SingleValueProps } from "react-select/lib/components/SingleValue";
import { GroupProps } from "react-select/lib/components/Group";

import { TokenIcon } from "../tokenIcon/TokenIcon";

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

export const CustomValue = <X extends OptionType>(props: SingleValueProps<X>) => {
    const { className, cx, getStyles, isDisabled, innerProps, children } = props;

    const option = props.data;

    return (
        <div
            className={cx(
                // tslint:disable-next-line: no-any
                css(getStyles("singleValue", props)),
                {
                    "single-value": true,
                    "single-value--is-disabled": isDisabled
                },
                className
            )}
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
            className={[cx(
                css(getStyles("option", props)),
                {
                    option: true,
                    "option--is-disabled": isDisabled,
                    "option--is-focused": isFocused,
                    "option--is-selected": isSelected,
                },
                className
            ), isSelected ? "Select--currency__option--selected" : ""].join(" ")}
            {...innerProps}
        >
            <TokenIcon token={option.value} />
            {children}
            <span>{option.name}</span>
        </div >
    );
};

export const CustomGroup = <X extends OptionType>(props: GroupProps<X>) => {
    const {
        children,
        className,
        cx,
        getStyles,
        Heading,
        label,
    } = props;
    return (
        <div
            className={[cx(
                css(getStyles('group', props)),
                { 'group': true },
                className,
            ), label === "Not Available" ? "Select--currency__group--disabled" : ""].join(" ")}
        >
            <Heading
                {...props}
            >
                {label}
            </Heading>
            <div>{children}</div>
        </div>
    );
};
