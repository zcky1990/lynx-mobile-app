import '@lynx-js/preact-devtools'
import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'

import { App } from './App.jsx'
import { ThemeProvider } from './providers/ThemeProvider'
import { ToastProvider } from './providers/ToastProvider.js'

root.render(
  <ThemeProvider defaultTheme="system">
    <ToastProvider>
      <App />
    </ToastProvider>
  </ThemeProvider>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
