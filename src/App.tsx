import { useCallback, useEffect, useState } from '@lynx-js/react'
import { useTheme } from './providers'


import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import { FlexGrowExample } from './components/Test'
import { Alert, type AlertProps } from './components/alert/Alert'

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
    buttonSubmitOnClick: () => {},
    buttonCancelLabel: 'Cancel',
    buttonCancelOnClick: () => {},
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
          <image src={arrow} className='Arrow' />
          <text className='Description'>Tap the logo and have fun!</text>
          <text className='Hint'>
            Edit<text
              style={{
                fontStyle: 'italic',
                color: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              {' src/App.tsx '}
            </text>
            to see updates!
          </text>
        </view>
        <view>
          <FlexGrowExample/>
           <text className='bg-black font-xl'>React asdasdsa</text>
        </view>
        <view style={{ flex: 1 }} />
      </view>
    </view>
  )
}
