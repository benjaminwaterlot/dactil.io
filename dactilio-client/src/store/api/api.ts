import { selector } from 'recoil'
import axios from 'axios'

export const quotesQuery = selector({
  key: 'quotes-query',
  get: async () => {
    const { data } = await axios.get('http://localhost:3010/quotes')

    return data
  },
})
