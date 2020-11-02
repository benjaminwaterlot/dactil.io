import React from 'react'
import { Text, TextProps } from '@chakra-ui/core'

import { getCharComponents } from './game-sentence.lib'

const GameSentence = ({
  sentence,
  activeChar,
  ...textProps
}: { sentence: string; activeChar: number } & TextProps) => {
  return <Text {...textProps}>{getCharComponents(sentence, activeChar)}</Text>
}

export default GameSentence
