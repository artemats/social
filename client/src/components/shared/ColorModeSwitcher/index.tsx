import { useCallback, useLayoutEffect, useState } from 'react'
import { Sun } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { ThemeTypes } from 'src/types'

const COLOR_MODE_KEY = 'colorMode'

const getInitialMode = (): ThemeTypes => {
  if (typeof window === 'undefined') return 'light'
  return localStorage.getItem(COLOR_MODE_KEY) === 'dark' ? 'dark' : 'light'
}

const ColorModeSwitcher = () => {
  const [mode, setMode] = useState<ThemeTypes>(getInitialMode)

  useLayoutEffect(() => {
    localStorage[COLOR_MODE_KEY] = mode
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(mode)
  }, [mode])

  const handleSwitch = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <Button
      variant="ghost"
      className="cursor-pointer p-3"
      asChild
      onClick={handleSwitch}
    >
      <Sun className="w-11 h-11" />
    </Button>
  )
}

export default ColorModeSwitcher
