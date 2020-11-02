import React from 'react'
import { Box, Center, Heading, Spinner } from '@chakra-ui/core'
import useColor from 'lib/use-color'

import { gameMachine, GameMachineState } from 'store/game/machine'
import useKeyListener from './use-key-listener'

import GameStats from './GameStats'
import GameSentence from './GameSentence'
import { useMachine } from '@xstate/react'
import sample from 'lodash/sample'
import { useRecoilValue } from 'recoil'
import { quotesQuery } from 'store/api/api'

interface Quote {
  _id: string
  sr: string
  en: string
  author: string
  source: string | null
  numberOfVotes: number
  rating: number
  addedBy: string
  id: string
}

const getMeta = (state: GameMachineState) => state.meta[`game-machine.${state.value}`]

export const GameLoading = () => (
  <Center minH={300}>
    <Spinner />
  </Center>
)

const GameContent = () => {
  const quotes = useRecoilValue(quotesQuery) as Quote[]

  const [current, send] = useMachine(gameMachine, {
    context: { sentence: sample(quotes)?.en },
  })

  useKeyListener(send)

  return (
    <>
      <Heading color="gray.500">{getMeta(current)}</Heading>
      <GameSentence
        my={5}
        sentence={current.context.sentence}
        activeChar={current.context.activeChar}
      />
      <GameStats context={current.context} />
    </>
  )
}

const Game = () => (
  <Box
    mt="10vh"
    p={10}
    bg={useColor('primary.900')}
    borderRadius={5}
    w={['100%', '80%', '70%']}
    fontFamily="mono"
    fontSize="2xl"
  >
    <React.Suspense fallback={<GameLoading />}>
      <GameContent />
    </React.Suspense>
  </Box>
)

export default Game
