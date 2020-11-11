import React from 'react'
import { Box } from '@chakra-ui/core'
import { GameSentenceCharProps } from '../game-sentence.types'
import useColor from 'lib/use-color'

const GameSentenceCharHighlighted = ({ char }: GameSentenceCharProps) => (
  <Box as="span" bg={useColor('primary.100')} color={useColor('primary.1000')}>
    {char}
  </Box>
)

export default GameSentenceCharHighlighted
