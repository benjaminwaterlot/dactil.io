import { useEffect } from 'react'
import { Send } from 'store/game/machine.types'

const isValidChar = (keycode: string) => {
  return keycode.length === 1 || keycode === 'Enter'
}

const useKeyListener = (send: Send) =>
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isValidChar(e.key)) send({ type: 'KEY_PRESS', key: e.key })
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  })

export default useKeyListener
