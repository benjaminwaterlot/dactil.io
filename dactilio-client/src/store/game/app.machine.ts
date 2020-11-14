import Axios from 'axios'
import { Machine, assign, DoneInvokeEvent } from 'xstate'

export interface AppContext {
  sentence: string
  author: string
}

export interface AppSchema {
  states: {
    loading: {}
    ready: {}
    failure: {}
  }
}

export interface AppEvent {
  type: 'done.invoke.loadSentence'
  payload: { text: string; author: string }[]
}

export type ApiQuotes = { text: string }[]

export const appMachine = Machine<AppContext, AppSchema, AppEvent>(
  {
    id: 'app-machine',

    context: {
      sentence: '',
      author: '',
    },

    initial: 'loading',

    states: {
      loading: {
        invoke: {
          src: 'loadSentence',
          onDone: {
            target: 'ready',
            actions: assign({
              sentence: (_, event: DoneInvokeEvent<ApiQuotes>) => event.data[0].text,
            }),
          },
          onError: {
            target: 'failure',
          },
        },
      },

      ready: {},

      failure: {},
    },
  },
  {
    services: {
      loadSentence: async () => {
        const { data } = await Axios.get('http://localhost:3010/quotes')

        return data as ApiQuotes
      },
    },
  }
)
