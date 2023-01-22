import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0576c1',
      light: '#3791cd',
      dark: '#035287',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff9501',
      light: '#ffaa33',
      dark: '#b26800',
      contrastText: 'rgba(0,0,0,0.87)',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat',
    },
    h2: {
      fontFamily: 'Montserrat',
    },
    h3: {
      fontFamily: 'Montserrat',
    },
    h4: {
      fontFamily: 'Montserrat',
    },
    h5: {
      fontFamily: 'Montserrat',
    },
    h6: {
      fontFamily: 'Montserrat',
    },
    subtitle1: {
      fontFamily: 'Montserrat',
    },
    subtitle2: {
      fontFamily: 'Montserrat',
    },
    button: {
      fontFamily: 'Montserrat',
    },
    caption: {
      fontFamily: 'Montserrat',
    },
    overline: {
      fontFamily: 'Montserrat',
    },
  },
  shape: {
    borderRadius: 0,
  },
})

export default theme
