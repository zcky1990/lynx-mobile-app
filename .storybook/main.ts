import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      define: {
        __LEPUS__: "false",
        __MAIN_THREAD__: "false",
        __BACKGROUND__: "true",
        __DEV__: "true",
        __PROFILE__: "false",
        __ALOG__: "false",
        __ALOG_ELEMENT_API__: "false",
        __JS__: "true",
        __ENABLE_SSR__: "false",
        __REF_FIRE_IMMEDIATELY__: "false",
        __FIRST_SCREEN_SYNC_TIMING__: '"immediately"',
        __TESTING_FORCE_RENDER_TO_OPCODE__: "false",
        lynx: "(globalThis.lynx ?? globalThis)",
        lynxCoreInject: "globalThis.__lynxCoreInject ?? (globalThis.__lynxCoreInject = { tt: { _params: { initData: {}, updateData: {} } } })",
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV ?? "development"),
      },
      esbuild: {
        jsx: "automatic",
        jsxImportSource: "@lynx-js/react",
      },
      optimizeDeps: {
        include: ["preact", "preact/compat", "preact/hooks"],
        exclude: ["@lynx-js/react"],
      },
    }),
};
export default config;