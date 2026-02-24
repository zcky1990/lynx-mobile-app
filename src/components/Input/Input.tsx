import type {InputComponentsProps}
from './InputCommon';
import {useState} from '@lynx-js/react';
import { Icon } from '../Icon/Icon';

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
        value = '' as string | number,
        onPress,
        onChange,
        validate,
        properties
    } = props;

    const [currentText, setCurrentText] = useState(value);
    const [errorMessage, setErrorMessage] = useState < string | null > (null);

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
            <view className="flex items-center justify-center flex-0" bindtap={
                () => onPress ?. (currentText)
            }>
                <Icon name={icon} size={properties?.icon?.size || 15} style={iconStyle} />
            </view>
        );
    }

    const handleInput = (e : any) => {
        setCurrentText(e.detail.value);
        if (validate ?. (currentText) !== null) {
            setErrorMessage(validate ?. (currentText) ?? null);
        } else {
            setErrorMessage(null);
        }
        onChange ?. (e.detail.value as string | number);
    };

    return (
        <view className="flex flex-col gap-2">
            {
            label !== undefined && label !== null ? renderLabel() : <></>
        }
            <view class="flex items-center justify-center flex-row border rounded-lg px-2 py-2 shadow-sm pe-10 sm:text-sm gap-2">
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

