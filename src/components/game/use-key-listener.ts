import { useEffect } from 'react'
import { Send } from '../../store/game/machine'

const useKeyListener = (send: Send) =>
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => send({ type: 'KEY_PRESS', key: e.key })
    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  })

export default useKeyListener
