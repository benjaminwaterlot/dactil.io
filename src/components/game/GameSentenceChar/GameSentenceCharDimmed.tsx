import React from 'react'
import { Box } from '@chakra-ui/core'
import { GameSentenceCharProps } from '../game-sentence.types'

const GameSentenceCharDimmed = ({ char }: GameSentenceCharProps) => (
  <Box as="span" color="gray.600">
    {char}
  </Box>
)

export default GameSentenceCharDimmed
