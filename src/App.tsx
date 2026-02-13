import { useCallback, useEffect, useState } from '@lynx-js/react'
import { useTheme, useToast } from './providers'


import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import { Alert, type AlertProps } from './components/alert/Alert'
import type { ToastProps } from './components/toast/common'


export function App(props: {
  onRender?: () => void
}) {
  const [alterLogo, setAlterLogo] = useState(false)
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()
  const { setToast, toggleToast,} = useToast();

  const toastData : ToastProps = {
    showToast: false,
    toastTitle: 'Toast',
    toastDescription: 'This is a toast',
    toastVariant: 'error',
    toastPosition: 'top',
    toastDuration: 500,
  }

  useEffect(() => {
    setToast(toastData)
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
          <view>
            <view bindtap={() => {
              toggleToast({...toastData, toastVariant: 'error'})
              }}>
              <text>SHOW Error TOAST</text>
            </view>
            <view bindtap={() => {
              toggleToast({...toastData, toastVariant: 'success'})
              }}>
              <text>SHOW SUCCESS TOAST</text>
            </view>
            <view bindtap={() => {
              toggleToast({...toastData, toastVariant: 'info'})
              }}>
              <text>SHOW INFO TOAST</text>
            </view>
            <view bindtap={() => {
              toggleToast({...toastData, toastVariant: 'warning'})
              }}>
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
