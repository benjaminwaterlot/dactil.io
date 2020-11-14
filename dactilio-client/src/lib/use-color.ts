import { useColorMode } from '@chakra-ui/core'

const COLORS: {
  [type: string]: {
    [shade: string]: {
      light: string
      dark: string
    }
  }
} = {
  primary: {
    '0': {
      light: 'gray.900',
      dark: 'white',
    },
    '100': {
      light: 'gray.900',
      dark: 'gray.100',
    },
    '500': {
      light: 'gray.500',
      dark: 'gray.500',
    },
    '600': {
      light: 'gray.400',
      dark: 'gray.600',
    },
    '700': {
      light: 'gray.300',
      dark: 'gray.700',
    },
    '800': {
      light: 'gray.200',
      dark: 'gray.800',
    },
    '900': {
      light: 'gray.100',
      dark: 'gray.900',
    },
    '1000': {
      light: 'white',
      dark: 'gray.900',
    },
  },
}

const useColor = (input: string) => {
  const [type, shade] = input.split('.')
  const { colorMode } = useColorMode()

  return COLORS[type]?.[shade]?.[colorMode] ?? 'red.500'
}

export default useColor
