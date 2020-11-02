import { Event, SCXML, EventData, Machine, State, StateMachine, assign } from 'xstate'

export enum KEY_STATUS {
  NEUTRAL = 'NEUTRAL',
  VALID = 'VALID',
  ERROR = 'ERROR',
}

export interface GameContext {
  sentence: string
  activeChar: number
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

export const gameMachine = Machine<GameContext, GameSchema, GameEvent>(
  {
    id: 'game-machine',
    context: {
      sentence: '',
      activeChar: 0,
      saved: {
        key: '',
        type: KEY_STATUS.NEUTRAL,
      },
      errors: [],
    },
    initial: 'playing',
    states: {
      playing: {
        meta: 'Game playing !',

        always: [
          {
            target: 'over',
            cond: 'sentenceIsDone',
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
        meta: 'Game over !',
      },
    },
  },
  {
    guards: {
      isCorrectInput: ({ sentence, activeChar }, event) => {
        const isCorrectInput = (sentence[activeChar] ?? 'Enter') === event.key

        return isCorrectInput
      },
      sentenceIsDone: ({ sentence, activeChar }) => activeChar === sentence.length,
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
        activeChar: ({ activeChar }) => activeChar + 1,
      }),
    },
  }
)
