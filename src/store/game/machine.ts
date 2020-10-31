import { Event, SCXML, EventData, Machine, State, StateMachine, assign } from 'xstate'

export enum KEY_STATUS {
  NEUTRAL = 'NEUTRAL',
  VALID = 'VALID',
  ERROR = 'ERROR',
}

export interface GameContext {
  sentences: string[]
  current: {
    sentence: number
    character: number
  }
  saved: {
    key: string
    type: KEY_STATUS
  }
  errors: string[]
}

export interface GameSchema {
  states: {
    playing: {}
    over: {}
  }
}

export interface GameEvent {
  type: 'KEY_PRESS'
  key: string
}

export type GameMachine = StateMachine<GameContext, GameSchema, GameEvent>
export type GameMachineState = State<GameContext, GameEvent>
export type Send = (
  event: GameEvent | Event<GameEvent>[] | SCXML.Event<GameEvent>,
  payload?: EventData | undefined
) => GameMachineState

/**
 * Machine
 */
export const gameMachine = Machine<GameContext, GameSchema, GameEvent>(
  {
    id: 'game-machine',
    context: {
      sentences: ['yay', 'The spectacle before us was indeed sublime.', 'hello'],
      current: {
        sentence: 0,
        character: 0,
      },
      saved: {
        key: '',
        type: KEY_STATUS.NEUTRAL,
      },
      errors: [],
    },
    initial: 'playing',
    states: {
      playing: {
        always: [
          {
            target: 'over',
            cond: ({ current, sentences }) => current.sentence === sentences.length,
          },
        ],
        on: {
          KEY_PRESS: [
            { cond: 'isCorrectInput', actions: ['saveCorrectInput', 'incrementChar'] },
            { actions: 'saveIncorrectInput' },
          ],
        },
      },
      over: {
        type: 'final',
      },
    },
  },
  {
    guards: {
      isCorrectInput: ({ sentences, current }, event) => {
        const currentSentence = sentences[current.sentence]
        const isCorrectInput = (currentSentence[current.character] ?? 'Enter') === event.key

        return isCorrectInput
      },
    },
    actions: {
      saveCorrectInput: assign({
        saved: ({ current, sentences }, event) => ({
          key: event.key,
          type: KEY_STATUS.VALID,
        }),
      }),
      saveIncorrectInput: assign({
        saved: ({ current, sentences }, event) => ({
          key: event.key,
          type: KEY_STATUS.ERROR,
        }),
        errors: ({ errors }, event) => [...errors, event.key],
      }),
      incrementChar: assign(({ current, sentences }) =>
        current.character >= sentences[current.sentence].length
          ? {
              current: {
                character: 0,
                sentence: current.sentence + 1,
              },
            }
          : {
              current: {
                character: current.character + 1,
                sentence: current.sentence,
              },
            }
      ),
    },
  }
)
