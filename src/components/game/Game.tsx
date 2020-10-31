import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/core'

import { GameMachineState, Send } from '../../store/game/machine'
import useKeyListener from './use-key-listener'

import GameStats from './GameStats'
import GameSentence from './GameSentence'

const Game = ({ current: { context, value }, send }: { current: GameMachineState; send: Send }) => {
  const bg = useColorModeValue('gray.100', 'gray.900')

  useKeyListener(send)

  return (
    <Box
      mt="10vh"
      p={10}
      bg={bg}
      borderRadius={5}
      w={['100%', '80%', '70%', '50%']}
      fontFamily="mono"
      fontSize="lg"
    >
      {context.sentences.map((sentence, idx) => {
        const cursorAt = context.current.sentence === idx ? context.current.character : null

        return <GameSentence key={sentence} {...{ sentence, cursorAt }} />
      })}

      <br></br>
      <pre>{value}</pre>
      <br></br>

      <GameStats context={context} />
    </Box>
  )
}

export default Game
