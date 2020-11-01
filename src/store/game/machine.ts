import { Event, SCXML, EventData, Machine, State, StateMachine, assign } from 'xstate'

export enum KEY_STATUS {
  NEUTRAL = 'NEUTRAL',
  VALID = 'VALID',
  ERROR = 'ERROR',
}

export interface GameContext {
  sentence: string
  currentCharacter: number
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
      sentence: 'The spectacle before us was indeed sublime.',
      currentCharacter: 0,
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
            cond: ({ currentCharacter, sentence }) => currentCharacter === sentence.length,
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
      isCorrectInput: ({ sentence, currentCharacter }, event) => {
        const isCorrectInput = (sentence[currentCharacter] ?? 'Enter') === event.key

        return isCorrectInput
      },
    },
    actions: {
      saveCorrectInput: assign({
        saved: (context, event) => ({
          key: event.key,
          type: KEY_STATUS.VALID,
        }),
      }),
      saveIncorrectInput: assign({
        saved: (context, event) => ({
          key: event.key,
          type: KEY_STATUS.ERROR,
        }),
        errors: ({ errors }, event) => [...errors, event.key],
      }),
      incrementChar: assign({
        currentCharacter: ({ currentCharacter }) => currentCharacter + 1,
      }),
    },
  }
)
