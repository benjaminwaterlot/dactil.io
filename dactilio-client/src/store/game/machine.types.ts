import { Event, SCXML, EventData, State, StateMachine } from 'xstate'

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
  startedAt: number | null
  errors: string[]
}

export interface GameSchema {
  states: {
    playing: {
      states: {
        idle: {}
        started: {}
        end: {}
      }
    }
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
