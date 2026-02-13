import { useCallback, useEffect, useState } from '@lynx-js/react'
import { useTheme } from './providers'


import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import { FlexGrowExample } from './components/Test'
import { Alert, type AlertProps } from './components/alert/Alert'
import { Toast } from './components/toast/Toast'
import type { ToastProps } from './components/toast/common'


export function App(props: {
  onRender?: () => void
}) {
  const [alterLogo, setAlterLogo] = useState(false)
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()


  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])
  props.onRender?.()

  const onTap = useCallback(() => {
    'background only'
    setAlterLogo(prevAlterLogo => !prevAlterLogo)
  }, [])

  const alertProps: AlertProps = {
    title: 'Alert',
    description: 'This is an alert sadsadasdasdasdasdasdads',
    variant: 'info',
    showSubmitButton: true,
    showCancelButton: true,
    buttonSubmitLabel: 'Submit',
    buttonSubmitOnClick: () => { },
    buttonCancelLabel: 'Cancel',
    buttonCancelOnClick: () => { },
  }

  const [toastProps, setToastProps] = useState<ToastProps>({
    showToast: false,
    toastTitle: 'Toast',
    toastDescription: 'This is a toast',
    toastVariant: 'error',
    toastPosition: 'top',
    toastDuration: 500,
  })

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Banner'>
          <view className='Logo' bindtap={onTap}>
            {alterLogo
              ? <image src={reactLynxLogo} className='Logo--react' />
              : <image src={lynxLogo} className='Logo--lynx' />}
          </view>
          <text className='Title'>React</text>
          <text className='Subtitle'>on Lynx</text>
        </view>
        <view className='Content'>
          <Alert {...alertProps} />
          <Toast {...toastProps} />
          <view>
            <view bindtap={() => setToastProps({...toastProps, toastVariant:'success', showToast: true} as ToastProps)}>
              <text>SHOW SUCCESS TOAST</text>
            </view>
            <view bindtap={() => setToastProps({...toastProps, toastVariant:'error', showToast: true} as ToastProps)}>
              <text>SHOW ERROR TOAST</text>
            </view>
            <view bindtap={() => setToastProps({...toastProps, toastVariant:'info', showToast: true} as ToastProps)}>
              <text>SHOW INFO TOAST</text>
            </view>
            <view bindtap={() => setToastProps({...toastProps, toastVariant:'warning', showToast: true} as ToastProps)}>
              <text>SHOW WARNING TOAST</text>
            </view>
            <text>Current: {resolvedTheme}</text>
            <view bindtap={toggleTheme}>
              <text>Toggle theme</text>
            </view>
            <view bindtap={() => setTheme('dark')}>
              <text>Dark</text>
            </view>
            <view bindtap={() => setTheme('light')}>
              <text>Light</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  )
}
