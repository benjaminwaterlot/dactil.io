import React from 'react'
import { Box } from '@chakra-ui/core'
import { GameSentenceCharProps } from '../game-sentence.types'

const GameSentenceCharHighlighted = ({ char }: GameSentenceCharProps) => (
  <Box as="span" bg="white" color="gray.800">
    {char}
  </Box>
)

export default GameSentenceCharHighlighted
