import React from 'react'
import { Heading } from '@chakra-ui/core'
import { gameMachine, GameMachineState } from 'store/game/machine'
import useKeyListener from './use-key-listener'

import GameStats from './GameStats/GameStats'
import GameSentence from './GameSentence/GameSentence'
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

export default GameContent
