import {useEffect} from '@lynx-js/react';
import type {ToastProps}
from "./ToastCommon"
import useToast from "./hook/useToast"

export const Toast = (props : ToastProps & {
    className?: string
}) => {
    const {
        show,
        viewToast,
        getClassToastPosition,
        getBackgroundColor,
        getBorderColor,
        getFontColor
    } = useToast(props)

    useEffect(() => {
        viewToast()
    }, [props])

    return (
        <view className={
                `${
                    show ? '' : 'hidden'
                } ${
                    props.className ? props.className : 'px-4 py-2'
                } flex items-center justify-center fixed ${
                    getClassToastPosition()
                } w-full z-10`
            }
            >
            <view className={
                `grid gap-0.5 ${
                    getBackgroundColor()
                } rounded-lg border ${
                    getBorderColor()
                } border-gray-100 shadow-sm px-4 py-3 text-left text-sm relative shadow-sm w-full max-w-lg-full max-w-lg`
            }>
                <view className="col-span-2 flex items-center justify-between gap-4">
                    <view className="flex flex-col gap-0.5">
                        <text className={
                            `${
                                getFontColor('title')
                            } font-medium`
                        }>
                            {
                            props.toastTitle
                        }</text>
                        <text className={
                            `${
                                getFontColor('body')
                            } text-sm text-balance md:text-pretty`
                        }>
                            {
                            props.toastDescription
                        } </text>
                    </view>
                </view>
            </view>
        </view>
    )
}

