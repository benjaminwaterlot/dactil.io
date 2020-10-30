import { extendTheme } from '@chakra-ui/core'
import layerStyles from './layer-styles'

const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  fonts: {
    heading: 'Merriweather',
  },
  layerStyles,
})

export default theme
