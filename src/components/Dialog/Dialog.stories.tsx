import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "@lynx-js/react";
import { Dialog } from "./index";
import { Button } from "../Button/Button";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <view className="inline-flex rounded-md bg-primary px-4 py-2">
            <text className="text-primary-foreground">Open Dialog</text>
          </view>
        </Dialog.Trigger>
        <Dialog.Content>
          <view className="p-6">
            <text className="text-lg font-semibold text-foreground">Confirm action</text>
            <text className="mt-2 text-muted-foreground">Are you sure you want to proceed?</text>
            <view className="mt-6 flex flex-row gap-3 justify-end">
              <Dialog.Close>
                <view className="rounded-md bg-secondary px-4 py-2">
                  <text className="text-secondary-foreground">Cancel</text>
                </view>
              </Dialog.Close>
              <view className="rounded-md bg-primary px-4 py-2" bindtap={() => setOpen(false)}>
                <text className="text-primary-foreground">Confirm</text>
              </view>
            </view>
          </view>
        </Dialog.Content>
      </Dialog>
    );
  },
};
