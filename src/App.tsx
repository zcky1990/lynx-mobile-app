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
import { TextArea } from './components/TextArea/TextArea'
import { Switch } from './components/Switch/Switch'
import { Timeline } from './components/Timeline/TimeLine'
import { Dropdown } from './components/Dropdown'
import { Table } from './components/Table'
import { SectionContentImage } from './components/Sections'
import { Dialog } from './components/Dialog'
import { Drawer } from './components/Drawer'
import { Avatar } from './components/Avatar'
import { ContactUs } from './components/ContactUs'

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

  const [dialogOpen, setDialogOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [inputSample, setInputSample] = useState('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...')
  const [textAreaSample, setTextAreaSample] = useState<string>(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

  const items = [
    { id: '1', label: 'Edit', onSelect: () => {} },
    { id: '2', label: 'Duplicate', onSelect: () => {} },
    { id: '3', label: 'Delete', onSelect: () => {} },
  ]

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ]
  const rows = [
    { name: 'Jane', email: 'jane@example.com', role: 'Admin' },
    { name: 'John', email: 'john@example.com', role: 'User' },
  ]

  return (
    <view>
      <view className='Background' />
      <view className='App bg-background'>
        <scroll-view scroll-orientation="vertical"
        style={{ width: "100%", height: "100vh" }}
        >
        <view className='Content px-4'>
          <view className='flex flex-col gap-2 py-8'>
          <text className='text-foreground'>Current: {resolvedTheme}</text>
            <view bindtap={toggleTheme}>
              <text className='text-foreground'>Toggle theme</text>
            </view>
            <Switch
              value={resolvedTheme === 'dark' ? 'on' : 'off'}
              onValueChange={(value: any) => {
                if (value === 'on') {
                  setTheme('dark')
                } else {
                  setTheme('light')
                }
              }}
            />
            <Timeline theme={resolvedTheme}>
              <Timeline.Item>
                <text className="text-xs font-medium dark:text-foreground text-gray-700 ">12/02/2025</text>
                <text className="text-lg font-bold text-gray-900 dark:text-foreground">Kickoff</text>
                <text className="mt-0.5 text-sm text-gray-700 dark:text-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
                  adipisci tenetur sunt quae exercitationem sed pariatur porro!
                </text>
              </Timeline.Item>
              <Timeline.Item>
                <text className="text-xs font-medium text-gray-700">12/02/2025</text>
                <text className="text-lg font-bold text-gray-900">Kickoff</text>
                <text className="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
                  adipisci tenetur sunt quae exercitationem sed pariatur porro!
                </text>
              </Timeline.Item>
            </Timeline>
            <text className='text-foreground'>{inputSample}</text>
            <Input label="Input" 
              placeholder="Input" 
              type="email" interaction="enabled" 
              icon="email"
              theme={resolvedTheme}
              validate={(val: string | number) => {
                if (!val.toString().includes('@')) return "Format email salah";
                if (val.toString().length < 5) return "Terlalu pendek";
                return null; 
              }}
              value={inputSample} onChange={(value) => {setInputSample(value as string)}} onPress={(value) => {console.log('Input pressed ', value)}} />
            
            <text className='text-foreground'>{textAreaSample}</text>
            <TextArea 
              label="TextArea Sample label" 
              placeholder="Text Area Sample" 
              maxlines={10}
              interaction="enabled" 
              theme={resolvedTheme}
              validate={(val: string) => {
                if (!val.toString().includes('@')) return "Format email salah";
                if (val.toString().length < 5) return "Terlalu pendek";
                return null; 
              }}
              value={textAreaSample} onChange={(value:string) => {
                console.log('TextArea changed', value)
                setTextAreaSample(value)
              }} />

          <Table columns={columns} rows={rows} />
          <Table columns={columns} rows={rows} variant="bordered" />
          <Table columns={columns} rows={rows} variant="striped" />
          <Table
            columns={columns}
            rows={rows}
            variant="striped"
            stickyHeader
            stickyFirstColumn
          />
          <Table columns={columns} rows={rows} theme={resolvedTheme} />
          <Dropdown
            triggerLabel="Options"
            items={items}
          />
          <Dropdown triggerLabel="Options" items={items} />
          <Dropdown triggerLabel="Options" items={items} theme={resolvedTheme} />
          <Dropdown triggerLabel="Actions" variant="divided" items={items} />
          <Dropdown
            triggerLabel="Settings"
            variant="grouped"
            groups={[
              { label: 'Account', items: [{ id: 'a1', label: 'Profile' }, { id: 'a2', label: 'Security' }] },
              { label: 'App', items: [{ id: 'b1', label: 'Notifications' }] },
            ]}
          />

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
            <Accordion {...accordion} theme={resolvedTheme} />
            <SettingsNotifications {...settingsNotifications} />
            <view className="flex flex-wrap gap-2 items-center mt-4">
              <Button variant="solid" size="md" onPress={() => toggleToast({ ...toastData, toastVariant: 'success' })}>Primary</Button>
              <Button variant="outline" size="md" onPress={() => {}}>Outline</Button>
              <Button variant="ghost" size="md" onPress={() => {}}>Ghost</Button>
              <Button variant="solid" size="md" onPress={() => setDialogOpen(true)}>Open dialog</Button>
              <Button variant="outline" size="md" onPress={() => setDrawerOpen(true)}>Open drawer</Button>
              <Badge variant="primary">12</Badge>
              <Badge variant="success">New</Badge>
              <Badge variant="outline">Draft</Badge>
            </view>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <Dialog.Content>
                <view className="p-4 flex flex-col gap-4">
                  <text className="text-lg font-semibold text-foreground">Dialog title</text>
                  <text className="text-muted-foreground">Dialog body. Tap outside or use the button to close.</text>
                  <view className="flex flex-row gap-2 justify-end">
                    <Dialog.Close>
                      <Button variant="outline" size="sm">Cancel</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button variant="solid" size="sm">Confirm</Button>
                    </Dialog.Close>
                  </view>
                </view>
              </Dialog.Content>
            </Dialog>
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <Drawer.Content side="right">
                <view className="p-4 flex flex-col gap-4">
                  <text className="text-lg font-semibold text-foreground">Drawer</text>
                  <text className="text-muted-foreground">Slide-in panel from the right. Tap outside or close to dismiss.</text>
                  <Drawer.Close>
                    <Button variant="solid" size="sm">Close</Button>
                  </Drawer.Close>
                </view>
              </Drawer.Content>
            </Drawer>
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
              <text className="text-sm font-medium text-foreground">Avatar & Avatar.Group</text>
              <view className="flex flex-row items-center gap-4 flex-wrap">
                <Avatar src="https://placehold.co/80/6366f1/fff?text=U" size="sm" theme={resolvedTheme} />
                <Avatar src="https://placehold.co/80/6366f1/fff?text=U" size="md" theme={resolvedTheme} />
                <Avatar src="https://placehold.co/80/6366f1/fff?text=U" size="lg" theme={resolvedTheme} />
                <Avatar src={null} size="lg" theme={resolvedTheme} />
                <Avatar size="lg" theme={resolvedTheme} />
              </view>
              <Avatar.Group
                items={[
                  { src: 'https://placehold.co/80/6366f1/fff?text=1' },
                  { src: 'https://placehold.co/80/8b5cf6/fff?text=2' },
                  { src: null },
                  { src: 'https://placehold.co/80/a855f7/fff?text=4' },
                  { src: 'https://placehold.co/80/c084fc/fff?text=5' },
                ]}
                maxCount={3}
                size="md"
                theme={resolvedTheme}
              />
            </view>
            <view className="mt-4 flex flex-col gap-4">
              <text className="text-sm font-medium text-foreground">Contact Us</text>
              <ContactUs
                title="Contact us"
                description="Get in touch with our team."
                phone="+1 (555) 123-4567"
                email="hello@example.com"
                address="123 Main St, City, Country"
                ctaLabel="Send message"
                onCtaPress={() => {}}
                theme={resolvedTheme}
              />
              <ContactUs
                title="Get in touch"
                email="support@example.com"
                ctaLabel="Email us"
                onCtaPress={() => {}}
                theme={resolvedTheme}
              />
            </view>
            <view className="mt-8 flex flex-col gap-8">
              <text className="text-sm font-medium text-foreground">Marketing Sections (SectionContentImage)</text>
              <SectionContentImage
                layout="half"
                order="contentFirst"
                subtitle="Marketing"
                title="Build something great"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                ctaLabel="Get started"
                onCtaPress={() => {}}
                imageSrc="https://placehold.co/400x300/f3f4f6/9ca3af?text=Section+image"
              />
              <SectionContentImage
                layout="vertical"
                title="Vertical split section"
                description="Content on top, image below. Ideal for mobile-first layouts."
                ctaLabel="Learn more"
                onCtaPress={() => {}}
                imageSrc="https://placehold.co/600x200/e5e7eb/6b7280?text=Vertical+image"
              />
            </view>
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
              <text className='text-foreground'>SHOW Error TOAST</text>
            </view>
          </view>
        </view>
        </scroll-view>
      </view>
    </view>
  )
}
