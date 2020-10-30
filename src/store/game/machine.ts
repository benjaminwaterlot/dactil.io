import { Machine, State, StateMachine } from 'xstate'

export interface GameContext {
  sentences: string[]
  current: number
}

export interface GameSchema {
  states: {
    idle: {}
    end: {}
  }
}

export interface GameEvent {
  type: 'KEY_PRESS'
}

export type GameMachine = StateMachine<GameContext, GameSchema, GameEvent>
export type GameMachineState = State<GameContext, GameEvent>

export const gameMachine = Machine<GameContext, GameSchema, GameEvent>({
  id: 'game-machine',
  context: {
    sentences: [
      'The spectacle before us was indeed sublime',
      'The spectacle before us was indeed sublime.',
      'The spectacle before us was indeed sublime!',
    ],
    current: 1,
  },
  initial: 'idle',
  states: {
    idle: {
      on: {
        KEY_PRESS: 'end',
      },
    },

    end: {
      type: 'final',
    },
  },
})
