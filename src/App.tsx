import React from 'react'
import { Button, Flex, Heading, useColorMode } from '@chakra-ui/core'
import Game from './components/game/Game'

const App = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Flex as="header" py={12} px={6} direction="column" align="center">
      <Heading size="2xl" as="h1">
        Dactil.io
      </Heading>

      <Game />

      <Button my={5} onClick={toggleColorMode}>
        Toggle mode
      </Button>
    </Flex>
  )
}

export default App
