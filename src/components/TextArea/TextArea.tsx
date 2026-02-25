import type {TextAreaComponentsProps}
from './TextAreaCommon';
import {useState, useEffect} from '@lynx-js/react';
import {useRef} from '@lynx-js/react';
import type {NodesRef}
from '@lynx-js/types';
import {twMerge} from 'tailwind-merge'

export const TextArea = (props : TextAreaComponentsProps) => {
    const {
        label,
        placeholder,
        interaction = 'enabled',
        maxlines,
        theme = 'light',
        value = '' as string,
        onChange,
        validate,
        properties
    } = props;

    const [currentText, setCurrentText] = useState(value);
    const [errorMessage, setErrorMessage] = useState < string | null > (null);
    const textAreaRef = useRef < NodesRef > (null);


    useEffect(() => {
        if (textAreaRef.current) {
            requestAnimationFrame(() => {
                textAreaRef.current ?. invoke?.({
                    method: 'setValue',
                    params: {
                        value: String(currentText)
                    },
                    success: () => {
                        console.log('setValue success');
                    },
                    fail: (error: any) => {
                        console.log('setValue fail', error);
                    }
                }).exec();
              });
        }
    }, []);

    const labelStyle: string = properties ?. label ?. style || '';
    const textAreaStyle: string = properties ?. textArea ?. style ? `width:100%;${
        properties ?. textArea ?. style
    }` : 'width:100%';
    const errorMessageStyle: string = properties ?. errorMessage ?. style || '';

    const labelClassName = () => {
        const defaultClassName = 'text-sm font-medium text-foreground'
        return(properties ?. label ?. className ? twMerge(defaultClassName, properties ?. label ?. className) : defaultClassName)
    }
    const renderLabel = () => {
        return (<text className={
                labelClassName()
            }
            style={labelStyle}> {label} </text>);
    };

    const textAreaClassName = () => {
        const defaultClassName = `border rounded-lg px-2 py-2 shadow-sm pe-10 text-sm gap-2 text-foreground ${
            theme === 'dark' ? 'bg-input' : ''
        }`
        return(properties ?. textArea ?. className ? twMerge(defaultClassName, properties ?. textArea ?. className) : defaultClassName)
    }

    const renderTextArea = () => {
        return (<textarea ref={textAreaRef}
            maxlines={maxlines}
            style={textAreaStyle}
            className={
                textAreaClassName()
            }
            placeholder={placeholder}
            bindfocus={handleFocus}
            bindblur={handleBlur}
            bindinput={handleInput}
            />);
    };

    const errorMessageClassName = () => {
        const defaultClassName = 'text-xs font-medium text-destructive-foreground'
        return(properties ?. errorMessage ?. className ? twMerge(defaultClassName, properties ?. errorMessage ?. className) : defaultClassName)
    }
    const renderErrorMessage = () => {
        return (<text className={
                errorMessageClassName()
            }
            style={errorMessageStyle}> {errorMessage} </text>)
    }

    const changeBorderColor = () => {
        if (textAreaRef.current) {
            const color = errorMessage !== undefined && errorMessage !== null ? "var(--destructive)" : "var(--ring)"
            textAreaRef.current ?. setNativeProps({'style': `width:100%; border-width: 1px; border-color: ${color}; outline: 0px;`}).exec();
        }
    }

    const handleFocus = () => {
        changeBorderColor()
    }

    const handleBlur = () => {
        if (textAreaRef.current) {
            textAreaRef.current ?. setNativeProps({'style': `width:100%;`}).exec();
        }
    }

    const handleInput = (e : {detail: {value: string}}) => {
        const newValue = e.detail.value;
        setCurrentText(newValue);
        if (validate ?. (newValue) !== null) {
            setErrorMessage(validate ?. (newValue) ?? null);
        } else {
            setErrorMessage(null);
        } changeBorderColor()
        onChange ?. (e.detail.value);
    };

    return (<view className="flex flex-col gap-2"> {
        label !== undefined && label !== null ? renderLabel() : <></>
    }
        <view className='flex flex-row items-center justify-center'> {
            renderTextArea()
        } </view>
        {
        errorMessage !== undefined && errorMessage !== null ? renderErrorMessage() : <></>
    } </view>);

};

