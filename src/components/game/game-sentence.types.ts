export interface GameSentenceCharProps {
  char: string
}

// export type GameSentenceCharDictionnary = Array<
//   [
//     (props: { char: string; charIndex: number; activeChar: number }) => boolean,
//     (props: GameSentenceCharProps) => JSX.Element
//   ]
// >

export type GameSentenceCharDictionnary = Array<{
  predicate: (props: { char: string; charIndex: number; activeChar: number }) => boolean
  component: (props: GameSentenceCharProps) => JSX.Element
}>
