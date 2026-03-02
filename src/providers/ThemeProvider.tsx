import { createContext, useCallback, useContext, useEffect, useRef, useState } from '@lynx-js/react'
import { useStorage } from '../composeable/useStorage'

const THEME_STORAGE_KEY = 'theme'

type Theme = 'light' | 'dark' | 'system'

function isValidTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark' || value === 'system'
}

interface ThemeContextValue {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

declare const lynx: {
  __globalProps?: { appTheme?: string }
} | undefined

function getSystemTheme(): 'light' | 'dark' {
  const hostTheme = lynx?.__globalProps?.appTheme
  if (hostTheme === 'dark' || hostTheme === 'light') return hostTheme
  return 'light'
}

export function ThemeProvider({
  defaultTheme = 'system',
  children,
}: {
  defaultTheme?: Theme
  children: React.ReactNode
}) {
  const { setStorage, getStorage, storedValue } = useStorage()
  const hasAppliedStoredTheme = useRef(false)

  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() =>
    defaultTheme === 'system' ? getSystemTheme() : defaultTheme
  )

  useEffect(() => {
    'background only'
    getStorage(THEME_STORAGE_KEY)
  }, [])

  useEffect(() => {
    'background only'
    if (hasAppliedStoredTheme.current) return
    if (storedValue != null && isValidTheme(storedValue)) {
      hasAppliedStoredTheme.current = true
      setThemeState(storedValue)
    }
  }, [storedValue])

  useEffect(() => {
    'background only'
    const resolved = theme === 'system' ? getSystemTheme() : theme
    setResolvedTheme(resolved)
  }, [theme])

  const setTheme = useCallback(
    (newTheme: Theme) => {
      'background only'
      setStorage(THEME_STORAGE_KEY, newTheme)
      setThemeState(newTheme)
    },
    [setStorage]
  )

  const toggleTheme = useCallback(() => {
    'background only'
    setThemeState(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme])

  const themeClass = resolvedTheme === 'dark' ? 'dark' : ''

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
      }}
    >
      <view className={themeClass}>{children}</view>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
