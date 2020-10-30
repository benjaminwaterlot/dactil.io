import React from 'react'
import {
  Flex,
  Button,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorMode,
} from '@chakra-ui/core'
import { useMachine } from '@xstate/react'
import { gameMachine } from './store/game/machine'
import Game from './components/game/Game'

function App() {
  const { toggleColorMode } = useColorMode()
  const [current, send] = useMachine(gameMachine)

  console.log({ machine: current, send })

  return (
    <Flex as="header" py={12} px={6} direction="column" align="center">
      <Heading size="2xl" as="h1">
        Dactil.io
      </Heading>

      <Game current={current} send={send} />

      <Popover trigger="hover">
        <PopoverTrigger>
          <Text mt="10vh">Test my popover!</Text>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>Heyyy</PopoverBody>
        </PopoverContent>
      </Popover>

      <Button onClick={toggleColorMode} mt={20}>
        Toggle color
      </Button>
    </Flex>
  )
}

export default App
