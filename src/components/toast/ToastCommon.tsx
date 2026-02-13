export interface ToastProps {
  showToast: boolean
  toastTitle: string
  toastDescription: string
  toastVariant?: "success" | "error" | "warning" | "info"
  toastPosition?: "top" | "bottom"
  toastDuration?: number
}
export type Variant = "success" | "error" | "warning" | "info"
export type FontType = "title" | "body"
