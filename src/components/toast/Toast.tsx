import { useEffect } from "react"
import type { ToastProps } from "./common"
import useToast from "./hook/useToast"

export const Toast = (props: ToastProps) => {
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
        <view className={`${show ? '' : 'hidden'} flex items-center justify-center fixed py-4 ${getClassToastPosition()} w-full`}>
            <view className={`grid gap-0.5 ${getBackgroundColor()} rounded-lg border ${getBorderColor()} border-gray-100 shadow-sm px-4 py-3 text-left text-sm relative shadow-sm w-full max-w-lg-full max-w-lg z-999`}>
                <view className="col-span-2 flex items-center justify-between gap-4">
                    <view className="flex flex-col gap-0.5">
                        <text className={`${getFontColor('title')} font-medium`} >{ props.toastTitle }</text>
                        <text className={`${getFontColor('body')} text-sm text-balance md:text-pretty`}>
                            { props.toastDescription }
                        </text>
                    </view>
                </view>
            </view>
        </view>
    )
}