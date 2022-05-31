import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    green: '#228b22'
  },
  fonts: {
    heading: 'peralta, sans-serif'
  },
  breakpoints,
  button: {
    colorScheme: 'red'
  }
})

export default theme
