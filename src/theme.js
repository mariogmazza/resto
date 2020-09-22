import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'hsla(339, 100%, 55%, 1)',
    },
    secondary: {
      main: 'hsla(197, 100%, 64%, 1)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F1FAEE',
    },
  },
})

export default theme
