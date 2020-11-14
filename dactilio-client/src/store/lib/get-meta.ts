import last from 'lodash/last'
import { State } from 'xstate'

export const getMeta = (state: State<any, any>) => {
  console.log(last(state.toStrings()))
  console.log(state.context)

  return state.meta[`test-machine.${last(state.toStrings())}`]
}
