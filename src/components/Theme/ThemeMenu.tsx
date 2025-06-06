'use client'

import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@/utils/icons'

const ThemeMenu = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (window) {
      setTheme(localStorage.getItem('theme') ?? 'dark')
      document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') ?? 'dark')
    }
  }, [])

  const toggleTheme = () => {
    if (window) {
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-6 top-6 z-50 rounded-full p-2 bg-neutral hover:bg-primary transition-colors duration-200 md:right-11 md:top-11"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-20 rounded-full"></div>
        </div>
        <div className="relative">
          {theme === 'dark' ? (
            <MoonIcon className="h-5 w-5 text-accent" />
          ) : (
            <SunIcon className="h-5 w-5 text-accent" />
          )}
        </div>
      </div>
    </button>
  )
}

export default ThemeMenu
