import React from 'react'
import { Box } from '@chakra-ui/core'
import { GameSentenceCharProps } from '../game-sentence.types'

const GameSentenceCharRegular = ({ char }: GameSentenceCharProps) => <Box as="span">{char}</Box>

export default GameSentenceCharRegular
