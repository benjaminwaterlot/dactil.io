import React from 'react'
import { Heading, Text } from '@chakra-ui/core'
import { testMachine } from 'store/game/test.machine'
import useKeyListener from './use-key-listener'

import GameStats from './GameStats/GameStats'
import GameSentence from './GameSentence/GameSentence'
import { useMachine } from '@xstate/react'
import sample from 'lodash/sample'
import { useRecoilValue } from 'recoil'
import { quotesQuery } from 'store/api/api'
import { getMeta } from 'store/lib/get-meta'
import useColor from 'lib/use-color'

interface Quote {
  id: number
  text: string
  author: string
}

const GameContent = () => {
  const quotes = useRecoilValue(quotesQuery) as Quote[]

  const sampleQuote = sample(quotes)
  if (!sampleQuote) throw new Error()

  const [current, send] = useMachine(testMachine, {
    context: { sentence: sampleQuote?.text, author: sampleQuote.author },
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
      <Text fontStyle="italic" color={useColor('primary.500')}>
        {current.context.author}
      </Text>
      <GameStats context={current.context} />
    </>
  )
}

export default GameContent
