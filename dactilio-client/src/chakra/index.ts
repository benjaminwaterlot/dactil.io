import { extendTheme } from '@chakra-ui/core'
import layerStyles from './layer-styles'

const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  fonts: {
    heading: 'Merriweather',
    mono: 'Operator Mono',
  },
  layerStyles,
})

export default theme
