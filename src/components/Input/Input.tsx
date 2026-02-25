import type {InputComponentsProps}
from './InputCommon';
import {useState} from '@lynx-js/react';
import {Icon} from '../Icon/Icon';
import {useRef} from '@lynx-js/react';
import type {NodesRef}
from '@lynx-js/types';

export const Input = (props : InputComponentsProps) => {
    const {
        label,
        placeholder,
        type = 'text',
        interaction = 'enabled',
        maxlength,
        showIcon = true,
        icon = 'phone',
        iconPosition = 'left',
        theme = 'light',
        value = '' as string | number,
        onPress,
        onChange,
        validate,
        properties
    } = props;

    const [currentText, setCurrentText] = useState(value);
    const [errorMessage, setErrorMessage] = useState < string | null > (null);
    const inputRef = useRef < NodesRef > (null);

    const labelStyle: string = properties ?. label ?. style || '';
    const inputStyle: string = properties ?. input ?. style || '';
    const iconStyle: string = properties ?. icon ?. style || '';
    const errorMessageStyle: string = properties ?. errorMessage ?. style || '';

    const renderLabel = () => {
        return (
            <text className={
                    properties ?. label ?. className || 'text-sm font-medium text-foreground'
                }
                style={labelStyle}>
                {label} </text>
        );
    };

    const renderInput = () => {
        return (
            <input maxlength={maxlength}
                style={inputStyle}
                className={
                    properties ?. input ?. className || 'mt-0.5 w-full flex-1'
                }
                disabled={
                    interaction !== 'enabled'
                }
                placeholder={placeholder}
                type={type}
                bindfocus={handleFocus}
                bindblur={handleBlur}
                bindinput={handleInput}/>
        );
    };

    const renderErrorMessage = () => {
        return (
            <text className={
                    properties ?. errorMessage ?. className || 'text-xs font-medium text-destructive-foreground'
                }
                style={errorMessageStyle}>
                {errorMessage} </text>
        )
    }

    const renderIcon = () => {
        return (
            <view className="flex items-center justify-center flex-0"
                bindtap={
                    () => onPress ?. (currentText)
            }>
                { theme === 'dark' ? <Icon name={icon}
                    color="white"
                    size={properties ?. icon ?. size || 15}
                    style={iconStyle}/> : <Icon name={icon}
                    color="black"
                    size={properties ?. icon ?. size || 15}
                    style={iconStyle}/>}
            </view>
        );
    }

    const changeBorderColor = () => {
        if (inputRef.current) {
            const color = errorMessage !== undefined && errorMessage !== null ? "var(--destructive)": "var(--ring)"
            inputRef.current ?. setNativeProps(
                {'style': `border-width: 1px; border-color: ${color}`}
            ).exec()   ;
        }
    }

    const handleFocus = () => {
        changeBorderColor()
    }

    const handleBlur = () => {
        if (inputRef.current) {
            inputRef.current ?. setNativeProps(
                {'style': ``}
            ).exec();
        }
    }

    const handleInput = (e : any) => {
        setCurrentText(e.detail.value);
        if (validate ?. (currentText) !== null) {
            setErrorMessage(validate ?. (currentText) ?? null);
        } else {
            setErrorMessage(null);
        }
        changeBorderColor()
        onChange ?. (e.detail.value as string | number);
    };

    const inputStyleClass = () => {
        return (
            `flex items-center justify-center flex-row border rounded-lg px-2 py-2 shadow-sm pe-10 sm:text-sm gap-2 ${
                theme === 'dark' ? 'bg-input' : ''
            }`
        )
    }

    return (
        <view className="flex flex-col gap-2">
            {
            label !== undefined && label !== null ? renderLabel() : <></>
        }
            <view ref={inputRef}
                class={inputStyleClass()}>
                {
                renderInput()
            }
                {
                showIcon ? <view className={
                    `${
                        iconPosition === 'left' ? 'order-first' : 'order-last'
                    }`
                }>
                    {
                    renderIcon()
                } </view> : <></>
            } </view>
            {
            errorMessage !== undefined && errorMessage !== null ? renderErrorMessage() : <></>
        } </view>
    );
};

