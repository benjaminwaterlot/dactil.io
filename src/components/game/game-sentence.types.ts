export interface GameSentenceCharProps {
  char: string
}

export type GameSentenceCharDictionnary = Array<
  [
    (index: number, currentCharacter: number) => boolean,
    (props: GameSentenceCharProps) => JSX.Element
  ]
>
