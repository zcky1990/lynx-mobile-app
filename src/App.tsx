import { useCallback, useEffect, useState } from '@lynx-js/react'
import { useTheme, useToast } from './providers'


import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import { Alert, type AlertProps } from './components/alert/Alert'
import type { ToastProps } from './components/toast/common'
import type { AccordionProps } from './components/accordion/common'
import { Accordion } from './components/accordion/Accordion'
import { describe } from 'vitest'


export function App(props: {
  onRender?: () => void
}) {
  const [alterLogo, setAlterLogo] = useState(false)
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()
  const { toggleToast,} = useToast();

  const toastData : ToastProps = {
    showToast: false,
    toastTitle: 'Toast',
    toastDescription: 'This is a toast',
    toastVariant: 'error',
    toastPosition: 'top',
    toastDuration: 500,
  }

  useEffect(() => {
    // setToast(toastData)
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

  const accordion :AccordionProps = {
    title: "What is ReactLynx?",
    description: "ReactLynx is a library for building web applications with React and Lynx. It provides a set of components and utilities for building web applications.",
    items: [
      {
        title: "What is ReactLynx?",
      description: "ReactLynx is a library for building web applications with React and Lynx. It provides a set of components and utilities for building web applications.",
      },
      {
        title: "What is ReactLynx?",
      description: "ReactLynx is a library for building web applications with React and Lynx. It provides a set of components and utilities for building web applications.",
      },
      {
        title: "What is ReactLynx?",
      description: "ReactLynx is a library for building web applications with React and Lynx. It provides a set of components and utilities for building web applications.",
      },
      {
        title: "What is ReactLynx?",
      description: "ReactLynx is a library for building web applications with React and Lynx. It provides a set of components and utilities for building web applications.",
      }
    ]
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
          <Accordion {...accordion} />
          <view>
            <view bindtap={() => {
              toggleToast({...toastData, toastDuration: 3000, toastVariant: 'error'})
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
