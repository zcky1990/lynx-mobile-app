import { useCallback, useEffect, useState } from '@lynx-js/react'
import { useTheme, useToast } from './providers'


import './App.css'
import { Alert, type AlertProps } from './components/Alert/Alert'
import type { ToastProps } from './components/Toast/ToastCommon'
import type { AccordionProps } from './components/Accordion/AccordionCommon'
import { Accordion } from './components/Accordion/Accordion'
import type { SettingsNotificationsProps } from './components/SettingsNotifications/SettingsNotificationsCommon'
import { SettingsNotifications } from './components/SettingsNotifications/SettingsNotifications'
import { Button } from './components/Button/Button'
import { Badge } from './components/Badge/Badge'
import { Card } from './components/Card/Card'
import { Breadcrumb } from './components/Breadcrumb/Breadcrumb'
import { Divider } from './components/Divider/Divider'
import { Checkbox } from './components/Checkbox'
import { Loader } from './components/Loader/Loader'
import { Tabs } from './components/Tabs'
import { Input } from './components/Input/Input'

export function App(props: {
  onRender?: () => void
}) {
  const [alterLogo, setAlterLogo] = useState(false)
  const [baseChecked, setBaseChecked] = useState(false)
  const [describedChecked, setDescribedChecked] = useState(true)
  const [groupItems, setGroupItems] = useState([
    { label: 'Email updates', description: 'Get notified about new features and releases.', checked: true },
    { label: 'Marketing', description: 'Receive tips and product updates.', checked: false },
    { label: 'Security alerts', description: 'Important security notifications.', checked: true },
  ])
  const setGroupItemChecked = useCallback((index: number, checked: boolean) => {
    setGroupItems(prev => prev.map((it, i) => i === index ? { ...it, checked } : it))
  }, [])
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
    buttonSubmitOnClick: () => toggleToast({...toastData, toastDuration: 3000, toastVariant: 'success'}),
    buttonCancelLabel: 'Cancel',
    buttonCancelOnClick: () => toggleToast({...toastData, toastDuration: 3000, toastVariant: 'error'}),
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

  const settingsNotifications: SettingsNotificationsProps = {
    items: [
      { title: "Push Notifications", description: "Receive push notifications on this device.", value: "on" },
      { title: "Email Notifications", description: "Get notified by email when something happens." },
      { title: "SMS Notifications", description: "Receive text messages for important updates.", value: "off" },
    ],
  }
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (seconds >= 100) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const [asd, setAsd] = useState('')

  return (
    <view>
      <view className='Background' />
      <view className='App bg-background'>
        <scroll-view scroll-orientation="vertical"
        style={{ width: "100%", height: "100vh", paddingLeft: "5px", borderRadius: "10px" }}
        >
        <view className='Content px-4'>
          <view className='flex flex-col gap-2 py-8 px-4'>
            <text>{asd}</text>
            <Input label="Input" 
              placeholder="Input" 
              type="email" interaction="enabled" 
              validate={(val:String | number) => {
                if (!val.toString().includes('@')) return "Format email salah";
                if (val.toString().length < 5) return "Terlalu pendek";
                return null; 
              }}
              value={asd} onChange={(value) => {setAsd(value as string)}} onPress={(value) => {console.log('Input pressed ', value)}} />

          <Tabs defaultValue="profile">
            <Tabs.List>
              <Tabs.Trigger id="profile">Profile</Tabs.Trigger>
              <Tabs.Trigger id="settings">Settings</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Panel id="profile">
              <text>Ini adalah konten profil user.</text>
            </Tabs.Panel>
            <Tabs.Panel id="settings">
              <text>Pengaturan akun ada di sini.</text>
            </Tabs.Panel>
          </Tabs>

            <Loader type="spinner" label="test" properties={{ spinner: { size: 40 } }}  />
            <Loader type="loader" label="test" percentage={seconds} />
            <Alert {...alertProps} />
            <Accordion {...accordion} />
            <SettingsNotifications {...settingsNotifications} />
            <view className="flex flex-wrap gap-2 items-center mt-4">
              <Button variant="solid" size="md" onPress={() => toggleToast({ ...toastData, toastVariant: 'success' })}>Primary</Button>
              <Button variant="outline" size="md" onPress={() => {}}>Outline</Button>
              <Button variant="ghost" size="md" onPress={() => {}}>Ghost</Button>
              <Badge variant="primary">12</Badge>
              <Badge variant="success">New</Badge>
              <Badge variant="outline">Draft</Badge>
            </view>
            <Card className="mt-4">
              <Card.Header>
                <text className="font-semibold text-foreground">Card title</text>
              </Card.Header>
              <Card.Body>
                <text className="text-muted-foreground text-sm">HyperUI-style card with optional header, body and footer.</text>
              </Card.Body>
              <Card.Footer>
                <view className="flex flex-row gap-2">
                  <Button variant="solid" size="sm" onPress={() => {}}>Save</Button>
                  <Button variant="outline" size="sm" onPress={() => {}}>Cancel</Button>
                </view>
              </Card.Footer>
            </Card>
            <view className="mt-4 flex flex-col gap-3">
              <text className="text-sm font-medium text-foreground">Breadcrumbs</text>
              <Breadcrumb
                items={[
                  { label: 'Home', onPress: () => {} },
                  { label: 'Products', onPress: () => {} },
                  { label: 'Shoes' },
                ]}
                divider="chevron"
              />
              <Breadcrumb
                items={[
                  { label: 'Home', onPress: () => {} },
                  { label: 'Settings', onPress: () => {} },
                  { label: 'Notifications' },
                ]}
                divider="slash"
                showHomeIcon
              />
            </view>
            <view className="mt-4 flex flex-col gap-4">
              <text className="text-sm font-medium text-foreground">Dividers</text>
              <Divider variant="base" />
              <Divider variant="gradient" />
              <Divider variant="base" align="left" />
              <Divider variant="gradient" align="left" />
              <Divider variant="base" align="right" />
              <Divider variant="gradient" align="right" />
            </view>
            <view className="mt-4 flex flex-col gap-4">
              <text className="text-sm font-medium text-foreground">Checkboxes</text>
              <Checkbox label="Base checkbox" checked={baseChecked} onCheckedChange={setBaseChecked} />
              <Checkbox label="Described" description="Optional description below the label." checked={describedChecked} onCheckedChange={setDescribedChecked} />
              <Checkbox.Group items={groupItems.map((item, index) => ({ ...item, onCheckedChange: (c: boolean) => setGroupItemChecked(index, c) }))} />
            </view>
          </view>
          <view>
            <view bindtap={() => {
              toggleToast({...toastData, toastDuration: 3000, toastVariant: 'error'})
              }}>
              <text>SHOW Error TOAST</text>
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
        </scroll-view>
      </view>
    </view>
  )
}
