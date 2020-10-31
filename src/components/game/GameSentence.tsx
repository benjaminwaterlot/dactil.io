import React from 'react'
import { Box, Text } from '@chakra-ui/core'
import take from 'lodash/take'
import slice from 'lodash/slice'

const GameHighlightedChar = ({ char }: { char: string }) => (
  <Box as="span" bg="white" color="gray.800">
    {char}
  </Box>
)

const GameSentenceInactive = ({ sentence }: { sentence: string }) => (
  <Text my={5} layerStyle="sentence.inactive">
    {sentence}
  </Text>
)

const GameSentenceActive = ({ sentence, cursorAt }: { sentence: string; cursorAt: number }) => {
  const donePart = take(sentence, cursorAt)
  const toDoPart = slice(sentence, cursorAt + 1)

  return (
    <Text my={5}>
      <Text as="span" layerStyle="sentence.inactive">
        {donePart}
      </Text>
      <GameHighlightedChar char={sentence[cursorAt] ?? '_'} />
      <Text as="span" layerStyle="sentence.active">
        {toDoPart}
      </Text>
    </Text>
  )
}

const GameSentence = ({ sentence, cursorAt }: { sentence: string; cursorAt: number | null }) =>
  cursorAt === null ? (
    <GameSentenceInactive sentence={sentence} />
  ) : (
    <GameSentenceActive {...{ sentence, cursorAt }} />
  )

export default GameSentence
