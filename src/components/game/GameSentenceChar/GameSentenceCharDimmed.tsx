import React from 'react'
import { Box } from '@chakra-ui/core'
import { GameSentenceCharProps } from '../game-sentence.types'
import useColor from 'lib/use-color'

const GameSentenceCharDimmed = ({ char }: GameSentenceCharProps) => (
  <Box as="span" color={useColor('primary.700')}>
    {char}
  </Box>
)

export default GameSentenceCharDimmed
