import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "@lynx-js/react";
import { Drawer } from "./index";

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RightSide: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
          <view className="inline-flex rounded-md bg-primary px-4 py-2">
            <text className="text-primary-foreground">Open Drawer</text>
          </view>
        </Drawer.Trigger>
        <Drawer.Content side="right">
          <view className="p-6">
            <text className="text-lg font-semibold text-foreground">Drawer Title</text>
            <text className="mt-2 text-muted-foreground">Drawer content goes here.</text>
            <view className="mt-6">
              <Drawer.Close>
                <view className="rounded-md bg-secondary px-4 py-2">
                  <text className="text-secondary-foreground">Close</text>
                </view>
              </Drawer.Close>
            </view>
          </view>
        </Drawer.Content>
      </Drawer>
    );
  },
};

export const LeftSide: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
          <view className="inline-flex rounded-md bg-primary px-4 py-2">
            <text className="text-primary-foreground">Open Drawer</text>
          </view>
        </Drawer.Trigger>
        <Drawer.Content side="left">
          <view className="p-6">
            <text className="text-lg font-semibold text-foreground">Menu</text>
            <text className="mt-2 text-muted-foreground">Navigation options.</text>
            <Drawer.Close>
              <view className="mt-6 rounded-md bg-secondary px-4 py-2">
                <text className="text-secondary-foreground">Close</text>
              </view>
            </Drawer.Close>
          </view>
        </Drawer.Content>
      </Drawer>
    );
  },
};

export const BottomSheet: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
          <view className="inline-flex rounded-md bg-primary px-4 py-2">
            <text className="text-primary-foreground">Open Sheet</text>
          </view>
        </Drawer.Trigger>
        <Drawer.Content side="bottom">
          <view className="p-6">
            <text className="text-lg font-semibold text-foreground">Bottom Sheet</text>
            <text className="mt-2 text-muted-foreground">Swipe or tap close to dismiss.</text>
            <Drawer.Close>
              <view className="mt-6 rounded-md bg-secondary px-4 py-2">
                <text className="text-secondary-foreground">Close</text>
              </view>
            </Drawer.Close>
          </view>
        </Drawer.Content>
      </Drawer>
    );
  },
};
