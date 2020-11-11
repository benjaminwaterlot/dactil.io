import { selector } from 'recoil'
import axios from 'axios'

export const quotesQuery = selector({
  key: 'quotes-query',
  get: async () => {
    const { data } = await axios.get('https://programming-quotes-api.herokuapp.com/quotes')

    return data
  },
})
