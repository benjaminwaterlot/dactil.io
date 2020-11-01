import React from 'react'
import { Text } from '@chakra-ui/core'
import { GameSentenceCharDictionnary } from './game-sentence.types'
import {
  GameSentenceCharDimmed,
  GameSentenceCharHighlighted,
  GameSentenceCharRegular,
} from './GameSentenceChar'

const CHAR_COMPONENTS = [
  [(index, currentCharacter) => index < currentCharacter, GameSentenceCharDimmed],
  [(index, currentCharacter) => index === currentCharacter, GameSentenceCharHighlighted],
  [() => true, GameSentenceCharRegular],
] as GameSentenceCharDictionnary

const GameSentence = ({
  sentence,
  currentCharacter,
}: {
  sentence: string
  currentCharacter: number
}) => {
  const getCharComponent = (idx: number) =>
    CHAR_COMPONENTS.find(([predicate]) => predicate(idx, currentCharacter))?.[1]

  return (
    <Text my={5}>
      {sentence.split('').map((char, index) => {
        const CharComponent = getCharComponent(index)

        return CharComponent && <CharComponent key={index} char={char} />
      })}
    </Text>
  )
}

export default GameSentence
