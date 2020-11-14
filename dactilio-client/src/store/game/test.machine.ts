import { Machine, assign } from 'xstate'
import { KEY_STATUS, GameContext, GameEvent, GameSchema } from './test.machine.types'

export const testMachine = Machine<GameContext, GameSchema, GameEvent>(
  {
    id: 'test-machine',
    context: {
      sentence: '',
      author: '',
      activeChar: 0,
      saved: {
        key: '',
        type: KEY_STATUS.NEUTRAL,
      },
      startedAt: null,
      errors: [],
    },
    initial: 'playing',
    states: {
      playing: {
        initial: 'idle',
        meta: 'Game playing !',
        states: {
          idle: {
            meta: 'Game ready to start',
          },
          started: {
            entry: 'logStartTime',

            always: [
              {
                target: 'end',
                cond: 'sentenceIsDone',
              },
            ],
          },
          end: {
            type: 'final',
          },
        },
        on: {
          KEY_PRESS: [
            {
              cond: 'isCorrectInput',
              actions: ['saveCorrectInput', 'incrementChar'],
              target: '.started',
            },
            { actions: 'saveIncorrectInput', target: '.started' },
          ],
        },
        onDone: 'over',
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
      logStartTime: assign({
        startedAt: (context) => Date.now(),
      }),
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
