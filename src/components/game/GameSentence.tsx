import React from 'react'
import { Text, TextProps } from '@chakra-ui/core'

import { GameSentenceCharDictionnary } from './game-sentence.types'
import { getCharComponents } from './game-sentence.lib'
import {
  GameSentenceCharDimmed,
  GameSentenceCharHighlighted,
  GameSentenceCharRegular,
} from './GameSentenceChar'

const DIMMED_CHARS = ['␣', '↵']

const CHAR_COMPONENTS = [
  {
    predicate: ({ charIndex, activeChar }) => charIndex === activeChar,
    component: GameSentenceCharHighlighted,
  },
  {
    predicate: ({ char, charIndex, activeChar }) =>
      charIndex < activeChar || DIMMED_CHARS.includes(char),
    component: GameSentenceCharDimmed,
  },
  {
    predicate: () => true,
    component: GameSentenceCharRegular,
  },
] as GameSentenceCharDictionnary

const GameSentence = ({
  sentence,
  activeChar,
  ...textProps
}: { sentence: string; activeChar: number } & TextProps) => {
  return <Text {...textProps}>{getCharComponents(sentence, activeChar)}</Text>
}

export default GameSentence
