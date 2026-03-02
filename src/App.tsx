import { useCallback, useEffect, useState } from "@lynx-js/react";
import { useTheme, useToast } from "./providers";
import "./App.css";

import { Alert, type AlertProps } from "./components/Alert/Alert";
import type { ToastProps } from "./components/Toast/ToastCommon";
import type { AccordionProps } from "./components/Accordion/AccordionCommon";
import { Accordion } from "./components/Accordion/Accordion";
import type { SettingsNotificationsProps } from "./components/SettingsNotifications/SettingsNotificationsCommon";
import { SettingsNotifications } from "./components/SettingsNotifications/SettingsNotifications";
import { Button } from "./components/Button/Button";
import { Badge } from "./components/Badge/Badge";
import { Card } from "./components/Card/Card";
import { Breadcrumb } from "./components/Breadcrumb/Breadcrumb";
import { Divider } from "./components/Divider/Divider";
import { Checkbox } from "./components/Checkbox";
import { Loader } from "./components/Loader/Loader";
import { Tabs } from "./components/Tabs";
import { Input } from "./components/Input/Input";
import { TextArea } from "./components/TextArea/TextArea";
import { Switch } from "./components/Switch/Switch";
import { Timeline } from "./components/Timeline/TimeLine";
import { Dropdown } from "./components/Dropdown";
import { Table } from "./components/Table";
import { SectionContentImage } from "./components/Sections";
import { Dialog } from "./components/Dialog";
import { Drawer } from "./components/Drawer";
import { Avatar } from "./components/Avatar";
import { ContactUs } from "./components/ContactUs";
import { Stats } from "./components/Stats/Stats";
import { Stepper } from "./components/Stepper/Stepper";
import { BottomNavigation } from "./components/BottomNavigation";
import { DatePicker } from "./components/DatePicker";

const SECTION_CLASS = "mt-8 flex flex-col gap-4";
const SECTION_TITLE_CLASS = "text-sm font-semibold text-foreground border-b border-border pb-2 mb-1";

/** Set to false if scrolling fails with sticky bottom nav (use full-height scroll instead). */
const SHOW_BOTTOM_NAV = true;
const BOTTOM_NAV_HEIGHT = 64;

function Section({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <view className={`${SECTION_CLASS} ${className}`.trim()}>
      <text className={SECTION_TITLE_CLASS}>{title}</text>
      {children}
    </view>
  );
}

const DROPDOWN_ITEMS = [
  { id: "1", label: "Edit", onSelect: () => {} },
  { id: "2", label: "Duplicate", onSelect: () => {} },
  { id: "3", label: "Delete", onSelect: () => {} },
];

const TABLE_COLUMNS = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
];

const TABLE_ROWS = [
  { name: "Jane", email: "jane@example.com", role: "Admin" },
  { name: "John", email: "john@example.com", role: "User" },
];

const STEPPER_STEPS = [
  { title: "Account", description: "Set up your account" },
  { title: "Settings", description: "Configure preferences" },
  { title: "Done", description: "You are all set" },
];

type StepperShowcase = "progress" | "stepCounter" | "grouped" | "timeline" | "all";
type TableShowcase = "default" | "striped" | "both";
type StatsShowcase = "inline" | "stacked" | "both";
type AlertShowcase = "info" | "success" | "error" | "warning";
type BreadcrumbDividerShowcase = "chevron" | "slash" | "both";
type DividerShowcase = "base" | "gradient" | "both";
type LoaderShowcase = "spinner" | "progress" | "both";

const STEPPER_LABELS: Record<StepperShowcase, string> = { progress: "Progress", stepCounter: "Step counter", grouped: "Grouped", timeline: "Timeline", all: "All" };
const TABLE_LABELS: Record<TableShowcase, string> = { default: "Default", striped: "Striped", both: "Both" };
const STATS_LABELS: Record<StatsShowcase, string> = { inline: "Inline", stacked: "Stacked", both: "Both" };
const ALERT_LABELS: Record<AlertShowcase, string> = { info: "Info", success: "Success", error: "Error", warning: "Warning" };
const BREADCRUMB_LABELS: Record<BreadcrumbDividerShowcase, string> = { chevron: "Chevron", slash: "Slash", both: "Both" };
const DIVIDER_LABELS: Record<DividerShowcase, string> = { base: "Base", gradient: "Gradient", both: "Both" };
const LOADER_LABELS: Record<LoaderShowcase, string> = { spinner: "Spinner", progress: "Progress", both: "Both" };

export function App(props: { onRender?: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { toggleToast } = useToast();

  const [baseChecked, setBaseChecked] = useState(false);
  const [describedChecked, setDescribedChecked] = useState(true);
  const [groupItems, setGroupItems] = useState([
    { label: "Email updates", description: "Get notified about new features.", checked: true },
    { label: "Marketing", description: "Receive tips and updates.", checked: false },
    { label: "Security alerts", description: "Important notifications.", checked: true },
  ]);
  const setGroupItemChecked = useCallback((index: number, checked: boolean) => {
    setGroupItems((prev) => prev.map((it, i) => (i === index ? { ...it, checked } : it)));
  }, []);

  const [seconds, setSeconds] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [stepperStep, setStepperStep] = useState(0);
  const [bottomNavActiveId, setBottomNavActiveId] = useState("home");
  const [selectedDate, setSelectedDate] = useState<Date | string | null>(null);
  const [lastDropdownSelection, setLastDropdownSelection] = useState<string | null>(null);
  const [inputSample, setInputSample] = useState("");
  const [textAreaSample, setTextAreaSample] = useState("");

  const [showcaseStepper, setShowcaseStepper] = useState<StepperShowcase>("all");
  const [showcaseTable, setShowcaseTable] = useState<TableShowcase>("both");
  const [showcaseStats, setShowcaseStats] = useState<StatsShowcase>("both");
  const [showcaseAlert, setShowcaseAlert] = useState<AlertShowcase>("info");
  const [showcaseBreadcrumbDivider, setShowcaseBreadcrumbDivider] = useState<BreadcrumbDividerShowcase>("both");
  const [showcaseBreadcrumbHomeIcon, setShowcaseBreadcrumbHomeIcon] = useState(false);
  const [showcaseDivider, setShowcaseDivider] = useState<DividerShowcase>("both");
  const [showcaseLoader, setShowcaseLoader] = useState<LoaderShowcase>("both");

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s >= 100 ? s : s + 1)), 1000);
    return () => clearInterval(t);
  }, []);

  props.onRender?.();

  const toastData: ToastProps = {
    showToast: false,
    toastTitle: "Toast",
    toastDescription: "This is a toast",
    toastVariant: "error",
    toastPosition: "top",
    toastDuration: 500,
  };

  const alertProps: AlertProps = {
    title: "Alert",
    description: "This is an alert message.",
    variant: "info",
    showSubmitButton: true,
    showCancelButton: true,
    buttonSubmitLabel: "Submit",
    buttonSubmitOnClick: () => toggleToast({ ...toastData, toastDuration: 3000, toastVariant: "success" }),
    buttonCancelLabel: "Cancel",
    buttonCancelOnClick: () => toggleToast({ ...toastData, toastDuration: 3000, toastVariant: "error" }),
  };

  const accordionProps: AccordionProps = {
    title: "What is ReactLynx?",
    description: "A library for building web applications with React and Lynx.",
    items: [
      { title: "What is ReactLynx?", description: "It provides components and utilities for web applications." },
      { title: "Features?", description: "Components, theming, and composition patterns." },
    ],
  };

  const settingsNotificationsProps: SettingsNotificationsProps = {
    items: [
      { title: "Push Notifications", description: "Receive push notifications.", value: "on" },
      { title: "Email Notifications", description: "Get notified by email." },
      { title: "SMS Notifications", description: "Important updates.", value: "off" },
    ],
  };

  return (
    <view>
      <view className="Background flex flex-col items-center justify-center" />
      <view className="App bg-white relative  flex flex-col" style={{ height: "100vh" }}>
        <scroll-view
          scroll-orientation="vertical"
          className="flex-1 min-h-0 max-w-md bg-background"
          style={{
            width: "100%",
            height: SHOW_BOTTOM_NAV ? `calc(100vh - ${BOTTOM_NAV_HEIGHT}px)` : "100vh",
          }}
        >
          <view className="Content px-4 pb-6">
            <Section title="Theme" className="mt-0 pt-6">
              <view className="flex flex-row items-center gap-3">
                <text className="text-sm text-foreground">Theme: {resolvedTheme}</text>
                <Switch
                  value={resolvedTheme === "dark" ? "on" : "off"}
                  onValueChange={(v) => setTheme(v === "on" ? "dark" : "light")}
                  thumbIcon={{
                    on: { name: "moon", color: "#ffe0c2" },
                    off: { name: "sun", color: "#644a40" },
                  }}
                />
              </view>
            </Section>

            <Section title="Showcase options">
              <text className="text-xs text-muted-foreground mb-2">
                Change options below to compare component variants in the sections underneath.
              </text>
              <view className="flex flex-col gap-3">
                <view className="flex flex-row items-center gap-2 flex-wrap">
                  <text className="text-sm text-foreground w-20">Stepper</text>
                  <Dropdown
                    triggerLabel={STEPPER_LABELS[showcaseStepper]}
                    items={[
                      { id: "progress", label: "Progress" },
                      { id: "stepCounter", label: "Step counter" },
                      { id: "grouped", label: "Grouped" },
                      { id: "timeline", label: "Timeline" },
                      { id: "all", label: "All" },
                    ]}
                    onChange={(item) => setShowcaseStepper(item.id as StepperShowcase)}
                  />
                </view>
                <view className="flex flex-row items-center gap-2 flex-wrap">
                  <text className="text-sm text-foreground w-20">Table</text>
                  <Dropdown
                    triggerLabel={TABLE_LABELS[showcaseTable]}
                    items={[
                      { id: "default", label: "Default" },
                      { id: "striped", label: "Striped" },
                      { id: "both", label: "Both" },
                    ]}
                    onChange={(item) => setShowcaseTable(item.id as TableShowcase)}
                  />
                </view>
                <view className="flex flex-row items-center gap-2 flex-wrap">
                  <text className="text-sm text-foreground w-20">Stats</text>
                  <Dropdown
                    triggerLabel={STATS_LABELS[showcaseStats]}
                    items={[
                      { id: "inline", label: "Inline" },
                      { id: "stacked", label: "Stacked" },
                      { id: "both", label: "Both" },
                    ]}
                    onChange={(item) => setShowcaseStats(item.id as StatsShowcase)}
                  />
                </view>
                <view className="flex flex-row items-center gap-2 flex-wrap">
                  <text className="text-sm text-foreground w-20">Alert</text>
                  <Dropdown
                    triggerLabel={ALERT_LABELS[showcaseAlert]}
                    items={[
                      { id: "info", label: "Info" },
                      { id: "success", label: "Success" },
                      { id: "error", label: "Error" },
                      { id: "warning", label: "Warning" },
                    ]}
                    onChange={(item) => setShowcaseAlert(item.id as AlertShowcase)}
                  />
                </view>
                <view className="flex flex-row items-center gap-2 flex-wrap">
                  <text className="text-sm text-foreground w-20">Breadcrumb</text>
                  <Dropdown
                    triggerLabel={BREADCRUMB_LABELS[showcaseBreadcrumbDivider]}
                    items={[
                      { id: "chevron", label: "Chevron" },
                      { id: "slash", label: "Slash" },
                      { id: "both", label: "Both" },
                    ]}
                    onChange={(item) => setShowcaseBreadcrumbDivider(item.id as BreadcrumbDividerShowcase)}
                  />
                  <view className="flex flex-row items-center gap-2">
                    <text className="text-sm text-foreground">Home icon</text>
                    <Switch
                      value={showcaseBreadcrumbHomeIcon ? "on" : "off"}
                      onValueChange={(v) => setShowcaseBreadcrumbHomeIcon(v === "on")}
                    />
                  </view>
                </view>
                <view className="flex flex-row items-center gap-2 flex-wrap">
                  <text className="text-sm text-foreground w-20">Divider</text>
                  <Dropdown
                    triggerLabel={DIVIDER_LABELS[showcaseDivider]}
                    items={[
                      { id: "base", label: "Base" },
                      { id: "gradient", label: "Gradient" },
                      { id: "both", label: "Both" },
                    ]}
                    onChange={(item) => setShowcaseDivider(item.id as DividerShowcase)}
                  />
                </view>
                <view className="flex flex-row items-center gap-2 flex-wrap">
                  <text className="text-sm text-foreground w-20">Loader</text>
                  <Dropdown
                    triggerLabel={LOADER_LABELS[showcaseLoader]}
                    items={[
                      { id: "spinner", label: "Spinner" },
                      { id: "progress", label: "Progress" },
                      { id: "both", label: "Both" },
                    ]}
                    onChange={(item) => setShowcaseLoader(item.id as LoaderShowcase)}
                  />
                </view>
              </view>
            </Section>

            <Section title="Forms">
              <Input
                label="Email"
                placeholder="you@example.com"
                type="email"
                interaction="enabled"
                icon="email"
                theme={resolvedTheme}
                value={inputSample}
                onChange={(v) => setInputSample(String(v))}
                validate={(val) => {
                  if (!String(val).includes("@")) return "Invalid email";
                  return null;
                }}
              />
              <DatePicker
                label="Date"
                placeholder="Pick a date"
                value={selectedDate}
                onChange={setSelectedDate}
                theme={resolvedTheme}
              />
              <TextArea
                label="Message"
                placeholder="Your message..."
                maxlines={4}
                interaction="enabled"
                theme={resolvedTheme}
                value={textAreaSample}
                onChange={setTextAreaSample}
              />
            </Section>

            <Section title="Buttons & Badges">
              <view className="flex flex-wrap gap-2">
                <Button variant="solid" size="md" onPress={() => toggleToast({ ...toastData, toastVariant: "success" })}>
                  Primary
                </Button>
                <Button variant="outline" size="md" onPress={() => {}}>Outline</Button>
                <Button variant="ghost" size="md" onPress={() => {}}>Ghost</Button>
                <Button variant="solid" size="md" onPress={() => setDialogOpen(true)}>Dialog</Button>
                <Button variant="outline" size="md" onPress={() => setDrawerOpen(true)}>Drawer</Button>
                <Badge variant="primary">12</Badge>
                <Badge variant="success">New</Badge>
                <Badge variant="outline">Draft</Badge>
              </view>
            </Section>

            <Section title="Data">
              <view className="flex flex-col gap-2">
                {lastDropdownSelection != null && (
                  <text className="text-xs text-muted-foreground">Selected: {lastDropdownSelection}</text>
                )}
                <Dropdown
                  triggerLabel="Options"
                  items={DROPDOWN_ITEMS}
                  onChange={(item) => setLastDropdownSelection(item.label)}
                />
                <Dropdown
                  triggerLabel="Settings"
                  variant="grouped"
                  groups={[
                    { label: "Account", items: [{ id: "a1", label: "Profile" }, { id: "a2", label: "Security" }] },
                    { label: "App", items: [{ id: "b1", label: "Notifications" }] },
                  ]}
                  onChange={(item) => setLastDropdownSelection(item.label)}
                />
              </view>
              {(showcaseTable === "default" || showcaseTable === "both") && (
                <Table columns={TABLE_COLUMNS} rows={TABLE_ROWS} theme={resolvedTheme} />
              )}
              {(showcaseTable === "striped" || showcaseTable === "both") && (
                <Table columns={TABLE_COLUMNS} rows={TABLE_ROWS} variant="striped" theme={resolvedTheme} />
              )}
              <Tabs defaultValue="profile">
                <Tabs.List>
                  <Tabs.Trigger id="profile">Profile</Tabs.Trigger>
                  <Tabs.Trigger id="settings">Settings</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Panel id="profile">
                  <text className="text-sm text-muted-foreground">Profile content.</text>
                </Tabs.Panel>
                <Tabs.Panel id="settings">
                  <text className="text-sm text-muted-foreground">Settings content.</text>
                </Tabs.Panel>
              </Tabs>
            </Section>

            <Section title="Feedback">
              {(showcaseLoader === "spinner" || showcaseLoader === "both") && (
                <Loader type="spinner" label="Loading" properties={{ spinner: { size: 40 } }} />
              )}
              {(showcaseLoader === "progress" || showcaseLoader === "both") && (
                <Loader type="loader" label="Progress" percentage={seconds} />
              )}
              <Alert {...alertProps} variant={showcaseAlert} />
            </Section>

            <Section title="Overlays">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <Dialog.Content>
                  <view className="p-4 flex flex-col gap-4">
                    <text className="text-lg font-semibold text-foreground">Dialog</text>
                    <text className="text-muted-foreground text-sm">Tap outside or use the button to close.</text>
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
                    <text className="text-muted-foreground text-sm">Slide-in panel. Tap outside to close.</text>
                    <Drawer.Close>
                      <Button variant="solid" size="sm">Close</Button>
                    </Drawer.Close>
                  </view>
                </Drawer.Content>
              </Drawer>
            </Section>

            <Section title="Card">
              <Card>
                <Card.Header>
                  <text className="font-semibold text-foreground">Card title</text>
                </Card.Header>
                <Card.Body>
                  <text className="text-muted-foreground text-sm">Optional header, body and footer.</text>
                </Card.Body>
                <Card.Footer>
                  <view className="flex flex-row gap-2">
                    <Button variant="solid" size="sm" onPress={() => {}}>Save</Button>
                    <Button variant="outline" size="sm" onPress={() => {}}>Cancel</Button>
                  </view>
                </Card.Footer>
              </Card>
            </Section>

            <Section title="Stepper">
              <view className="flex flex-row gap-2 flex-wrap">
                <Button variant="outline" size="sm" onPress={() => setStepperStep((s) => Math.max(0, s - 1))}>
                  Prev
                </Button>
                <Button variant="outline" size="sm" onPress={() => setStepperStep((s) => Math.min(2, s + 1))}>
                  Next
                </Button>
              </view>
              {(showcaseStepper === "progress" || showcaseStepper === "all") && (
                <Stepper
                  steps={STEPPER_STEPS.map((step) => ({ ...step, icon: { dark: { name: "user" }, light: { name: "user" } } }))}
                  currentStep={stepperStep}
                  variant="progress"
                  theme={resolvedTheme}
                />
              )}
              {(showcaseStepper === "stepCounter" || showcaseStepper === "all") && (
                <Stepper
                  steps={STEPPER_STEPS.map((step) => ({ ...step, icon: { dark: { name: "user" }, light: { name: "user" } } }))}
                  currentStep={stepperStep}
                  variant="stepCounter"
                  theme={resolvedTheme}
                />
              )}
              {(showcaseStepper === "grouped" || showcaseStepper === "all") && (
                <Stepper
                  steps={STEPPER_STEPS.map((step) => ({ ...step, icon: { dark: { name: "user" }, light: { name: "user" } } }))}
                  currentStep={stepperStep}
                  variant="grouped"
                  theme={resolvedTheme}
                />
              )}
              {(showcaseStepper === "timeline" || showcaseStepper === "all") && (
                <Stepper
                  steps={[
                    { title: "Order placed", description: "Received" },
                    { title: "Processing", description: "Preparing" },
                    { title: "Shipped", description: "On the way" },
                  ]}
                  currentStep={stepperStep}
                  variant="timeline"
                  theme={resolvedTheme}
                />
              )}
            </Section>

            <Section title="Timeline">
              <Timeline theme={resolvedTheme}>
                <Timeline.Item>
                  <text className="text-xs font-medium text-muted-foreground">12/02/2025</text>
                  <text className="text-lg font-bold text-foreground">Kickoff</text>
                  <text className="mt-0.5 text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </text>
                </Timeline.Item>
                <Timeline.Item>
                  <text className="text-xs font-medium text-muted-foreground">15/02/2025</text>
                  <text className="text-lg font-bold text-foreground">Review</text>
                  <text className="mt-0.5 text-sm text-muted-foreground">Progress review meeting.</text>
                </Timeline.Item>
              </Timeline>
            </Section>

            <Section title="Breadcrumb">
              {(showcaseBreadcrumbDivider === "chevron" || showcaseBreadcrumbDivider === "both") && (
                <Breadcrumb
                  items={[
                    { label: "Home", onPress: () => {} },
                    { label: "Products", onPress: () => {} },
                    { label: "Shoes" },
                  ]}
                  divider="chevron"
                  showHomeIcon={showcaseBreadcrumbHomeIcon}
                  theme={resolvedTheme}
                />
              )}
              {(showcaseBreadcrumbDivider === "slash" || showcaseBreadcrumbDivider === "both") && (
                <Breadcrumb
                  items={[
                    { label: "Home", onPress: () => {} },
                    { label: "Settings", onPress: () => {} },
                    { label: "Notifications" },
                  ]}
                  divider="slash"
                  showHomeIcon={showcaseBreadcrumbHomeIcon}
                  theme={resolvedTheme}
                />
              )}
            </Section>

            <Section title="Stats">
              <view className={`flex flex-row flex-wrap gap-4 ${showcaseStats === "stacked" ? "flex-col" : ""}`}>
                {(showcaseStats === "inline" || showcaseStats === "both") && (
                  <>
                    <Stats title="Revenue" value="€45,231" growth={{ value: "+12.5%", trend: "up" }} theme={resolvedTheme} />
                    <Stats title="Users" value="2,350" icon="user" growth={{ value: "-3.2%", trend: "down" }} theme={resolvedTheme} />
                  </>
                )}
                {(showcaseStats === "stacked" || showcaseStats === "both") && (
                  <>
                    <Stats title="Revenue" value="€45,231" growth={{ value: "+12.5%", trend: "up" }} stacked theme={resolvedTheme} />
                    <Stats title="Users" value="2,350" icon="user" growth={{ value: "-3.2%", trend: "down" }} stacked theme={resolvedTheme} />
                  </>
                )}
              </view>
            </Section>

            <Section title="Divider">
              {(showcaseDivider === "base" || showcaseDivider === "both") && <Divider variant="base" />}
              {(showcaseDivider === "gradient" || showcaseDivider === "both") && <Divider variant="gradient" />}
            </Section>

            <Section title="Checkbox">
              <Checkbox label="Base" checked={baseChecked} onCheckedChange={setBaseChecked} />
              <Checkbox
                label="With description"
                description="Optional description."
                checked={describedChecked}
                onCheckedChange={setDescribedChecked}
              />
              <Checkbox.Group
                items={groupItems.map((item, index) => ({
                  ...item,
                  onCheckedChange: (c: boolean) => setGroupItemChecked(index, c),
                }))}
              />
            </Section>

            <Section title="Accordion">
              <Accordion {...accordionProps} theme={resolvedTheme} />
            </Section>

            <Section title="Settings Notifications">
              <SettingsNotifications {...settingsNotificationsProps} />
            </Section>

            <Section title="Avatar">
              <view className="flex flex-row items-center gap-4 flex-wrap">
                <Avatar src="https://placehold.co/80/6366f1/fff?text=U" size="sm" theme={resolvedTheme} />
                <Avatar src="https://placehold.co/80/6366f1/fff?text=U" size="md" theme={resolvedTheme} />
                <Avatar src="https://placehold.co/80/6366f1/fff?text=U" size="lg" theme={resolvedTheme} />
                <Avatar size="lg" theme={resolvedTheme} />
              </view>
              <Avatar.Group
                items={[
                  { src: "https://placehold.co/80/6366f1/fff?text=1" },
                  { src: "https://placehold.co/80/8b5cf6/fff?text=2" },
                  { src: null },
                  { src: "https://placehold.co/80/a855f7/fff?text=4" },
                ]}
                maxCount={3}
                size="md"
                theme={resolvedTheme}
              />
            </Section>

            <Section title="Contact Us">
              <ContactUs
                title="Contact us"
                description="Get in touch."
                email="hello@example.com"
                ctaLabel="Send message"
                onCtaPress={() => {}}
                theme={resolvedTheme}
              />
            </Section>

            <Section title="Marketing Section">
              <SectionContentImage
                layout="vertical"
                title="Build something great"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                ctaLabel="Get started"
                onCtaPress={() => {}}
                imageSrc="https://placehold.co/600x200/e5e7eb/6b7280?text=Image"
              />
            </Section>

            <Section title="Toast">
              <view bindtap={() => toggleToast({ ...toastData, toastDuration: 3000, toastVariant: "error" })}>
                <text className="text-sm text-foreground">Tap to show error toast</text>
              </view>
            </Section>
          </view>
        </scroll-view>

        {SHOW_BOTTOM_NAV && (
        <view className="shrink-0">
          <BottomNavigation
            items={[
              { id: "home", label: "Home", icon: "home" },
              { id: "search", label: "Search", icon: "search" },
              { id: "calendar", label: "Calendar", icon: "calendar" },
              { id: "user", label: "Profile", icon: "user" },
            ]}
            activeId={bottomNavActiveId}
            onChange={setBottomNavActiveId}
            theme={resolvedTheme}
          />
        </view>
        )}
      </view>
    </view>
  );
}
