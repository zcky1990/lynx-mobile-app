// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
import '@testing-library/jest-dom'
import { expect, test, vi } from 'vitest'
import { render, getQueriesForElement } from '@lynx-js/react/testing-library'

import { ThemeProvider, ToastProvider } from '../providers'
import { App } from '../App.jsx'

test('App', async () => {
  const cb = vi.fn()

  render(
    <ThemeProvider>
      <ToastProvider>
        <App
          onRender={() => {
            cb(`__MAIN_THREAD__: ${__MAIN_THREAD__}`)
          }}
        />
      </ToastProvider>
    </ThemeProvider>,
  )
  expect(cb).toBeCalledTimes(1)
})
