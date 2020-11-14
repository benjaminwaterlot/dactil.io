import React from 'react'
import { Button, Code, Flex, Heading, useColorMode } from '@chakra-ui/core'
import Game from './components/Game/Game'
import { useMachine } from '@xstate/react'
import { appMachine } from 'store/game/app.machine'

const App = () => {
  const { toggleColorMode } = useColorMode()
  const [current] = useMachine(appMachine)

  console.log('🌈 : App -> current', current.context.sentence)

  return (
    <Flex as="header" py={12} px={6} direction="column" align="center">
      <Heading size="2xl" as="h1">
        Dactil.io
      </Heading>

      <Code>{current.value}</Code>
      <Code>{(current.context as any).sentence}</Code>

      <Game />

      <Button my={5} onClick={toggleColorMode}>
        Toggle mode
      </Button>
    </Flex>
  )
}

export default App
