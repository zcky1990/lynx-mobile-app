import { createContext, useCallback, useContext, useEffect, useState } from '@lynx-js/react'
import type { ToastProps } from '../components/Toast/ToastCommon'
import { Toast } from '../components/Toast/Toast'

interface ToastContextValue {
  toast: ToastProps
  toggleToast: (toast?: ToastProps) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({
  toast = {
    showToast: false,
    toastTitle: 'Toast title',
    toastDescription: 'This is a toast message',
    toastVariant: 'success',
    toastPosition: 'top',
    toastDuration: 1000,
  },
  children,
}: {
  toast?: ToastProps,
  children: React.ReactNode
}) {
  const [toastState, setToastState] = useState<ToastProps>(toast)

  const toggleToast = useCallback((data?: ToastProps) => {
    setToastState({...(data || toastState), showToast: true })
  }, [toastState, toast])

  return (
    <ToastContext.Provider
      value={{
        toast,
        toggleToast,
      }}
    >
      <>
      <Toast {...toastState} />
      <view>{children}</view>
      </>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
