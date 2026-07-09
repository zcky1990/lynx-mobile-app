export interface AlertProps {
  title?: string
  description?: string
  variant?: 'success' | 'error' | 'warning' | 'info'
  showSubmitButton?: boolean
  showCancelButton?: boolean
  buttonSubmitLabel?: string
  buttonSubmitOnClick?: () => void
  buttonCancelLabel?: string
  buttonCancelOnClick?: () => void
}

export const Alert = (props: AlertProps) => {
  const {
    title = 'Alert',
    description = '',
    showSubmitButton = true,
    showCancelButton = true,
    buttonSubmitLabel = 'Submit',
    buttonSubmitOnClick = () => {},
    buttonCancelLabel = 'Cancel',
    buttonCancelOnClick = () => {},
  } = props
  return (
    <view className="flex flex-grow flex-col justify-between gap-0.5 rounded-lg border shadow-md px-4 py-3 text-left text-sm relative bg-card text-card-foreground w-full">
            <view className="col-span-2 flex items-center justify-between gap-4">
        <view className="flex flex-col gap-0.5">
            <text className="font-medium text-foreground">{title}</text>
            <text className="text-muted-foreground text-sm text-balance md:text-pretty">
                {description}
            </text>
        </view>
        {showSubmitButton || showCancelButton ? 
            <view className="flex shrink-0 gap-2">
                {showSubmitButton && (
                    <view className="rounded-md bg-primary px-2.5 py-1.5  shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" bindtap={ buttonSubmitOnClick }>
                        <text className="text-sm font-semibold text-primary-foreground">{buttonSubmitLabel}</text>
                    </view>
                )}
                {showCancelButton && (
                    <view className="rounded-md bg-secondary px-2.5 py-1.5  shadow-sm hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary" bindtap={ buttonCancelOnClick }>
                        <text className="text-sm font-semibold text-secondary-foreground">{buttonCancelLabel}</text>
                    </view>
                )}
            </view> : <></>}
        </view>
  </view>
  )
}