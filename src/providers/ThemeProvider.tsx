import { createContext, useCallback, useContext, useEffect, useState } from '@lynx-js/react'

type Theme = 'light' | 'dark' | 'system'

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
  if (typeof lynx !== 'undefined' && lynx?.__globalProps?.appTheme) {
    const hostTheme = lynx.__globalProps.appTheme
    if (hostTheme === 'dark' || hostTheme === 'light') return hostTheme
  }
  return 'light'
}

export function ThemeProvider({
  defaultTheme = 'system',
  children,
}: {
  defaultTheme?: Theme
  children: React.ReactNode
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() =>
    defaultTheme === 'system' ? getSystemTheme() : defaultTheme
  )

  useEffect(() => {
    'background only'
    const resolved = theme === 'system' ? getSystemTheme() : theme
    setResolvedTheme(resolved)
  }, [theme])

  const setTheme = useCallback((newTheme: Theme) => {
    'background only'
    setThemeState(newTheme)
  }, [])

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
