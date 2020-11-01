import React from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import { useMachine } from '@xstate/react'
import { gameMachine } from './store/game/machine'
import Game from './components/game/Game'

function App() {
  const [current, send] = useMachine(gameMachine)

  console.log(current.value, current.context)

  return (
    <Flex as="header" py={12} px={6} direction="column" align="center">
      <Heading size="2xl" as="h1">
        Dactil.io
      </Heading>

      <Game current={current} send={send} />
    </Flex>
  )
}

export default App
