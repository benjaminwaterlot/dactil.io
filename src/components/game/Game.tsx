import React from 'react'
import { Box, Button, Center, Text, useColorModeValue } from '@chakra-ui/core'
import { GameEvent, GameMachineState } from '../../store/game/machine'
import { Event, EventData, SCXML } from 'xstate'

const Game = ({
  current,
  send,
}: {
  current: GameMachineState
  send: (
    event: GameEvent | Event<GameEvent>[] | SCXML.Event<GameEvent>,
    payload?: EventData | undefined
  ) => GameMachineState
}) => {
  const bg = useColorModeValue('gray.100', 'gray.900')

  return (
    <Box mt="10vh" p={10} bg={bg} borderRadius={5} minWidth={['100%', '50%']} fontFamily="mono">
      {current.context.sentences.map((sentence, idx) => {
        const isCurrent = current.context.current === idx

        return (
          <Text
            key={sentence}
            my={5}
            layerStyle={isCurrent ? 'sentence.active' : 'sentence.inactive'}
          >
            {sentence}
          </Text>
        )
      })}
      <br></br>
      <pre>{current.value}</pre>
      <Button onClick={() => send({ type: 'KEY_PRESS' })}>End game</Button>
    </Box>
  )
}

export default Game
