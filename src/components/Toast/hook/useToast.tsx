import { useState } from "react"
import type { ToastProps, FontType, Variant } from "../ToastCommon"

const useToast = (props: ToastProps) => {
    const {
        showToast = false,
        toastVariant = "success",
        toastPosition = "top",
        toastDuration = 500,
    } = props

    const [show, setShow] = useState<boolean>(showToast)

    const viewToast = () => {
        if (!showToast) return
        setShow(true)
        const timer = setTimeout(() => {
            setShow(false)
        }, toastDuration)
        return () => clearTimeout(timer)
    }

    const getClassToastPosition = () => {
        if (toastPosition === 'top') return 'top-0'
        return 'bottom-0'
    }

    const getFontColor = (type: FontType): string => {
        const baseColors: Record<Variant, string> = {
            success: "text-success",
            error: "text-destructive",
            warning: "text-warning",
            info: "text-info",
        }

        const color = baseColors[toastVariant]
        return type === "title" ? color : `${color}-foreground`
    }

    const getBackgroundColor = (): string => {
        const baseColors: Record<Variant, string> = {
            success: "bg-success",
            error: "bg-destructive",
            warning: "bg-warning",
            info: "bg-info",
        }
        return baseColors[toastVariant];
    }

    const getBorderColor = (): string => {
        const baseColors: Record<Variant, string> = {
            success: "border-success",
            error: "border-destructive",
            warning: "border-warning",
            info: "border-info",
        }
        return baseColors[toastVariant];
    }

    return {
        show,
        viewToast,
        getClassToastPosition,
        getBorderColor,
        getBackgroundColor,
        getFontColor
    }
}

export default useToast;