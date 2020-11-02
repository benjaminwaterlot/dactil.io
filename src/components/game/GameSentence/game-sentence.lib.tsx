import React from 'react'
import { GameSentenceCharDictionnary } from './game-sentence.types'
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

const getCharComponents = (sentence: string, activeChar: number) =>
  sentence
    .replace(/ /g, '␣')
    .split('')
    /**
     * Get our React component for this character
     */
    .map((char, charIndex) => {
      const CharComponent = CHAR_COMPONENTS.find(({ predicate }) =>
        predicate({ char, charIndex, activeChar })
      )?.component
      if (!CharComponent) throw new Error('A char component should always be valid')

      return <CharComponent key={charIndex} char={char} />
    })
    /**
     *
     */
    .reduce((chars, char, charIndex) => {
      const isSpace = char.props.char === '␣'
      return [...chars, char, isSpace && <wbr key={`␣${charIndex}`} />]
    }, [] as (JSX.Element | boolean)[])

export { getCharComponents }
