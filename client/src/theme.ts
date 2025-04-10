import { ThemeTypes } from 'src/types'
import { grey, common, indigo } from '@mui/material/colors'

export const themeSettings = (mode: ThemeTypes) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: grey[500],
              light: grey[300],
              dark: grey[700],
            },
            secondary: {
              main: grey[400],
            },
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: grey[100],
              secondary: grey[400],
            },
          }
        : {
            primary: {
              main: indigo[500],
              light: indigo[100],
              dark: indigo[700],
            },
            secondary: {
              main: indigo[200],
            },
            background: {
              default: common.white,
              paper: grey[100],
            },
            text: {
              primary: grey[900],
              secondary: grey[700],
            },
          }),
    },
    typography: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 16,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 28,
      },
      h4: {
        fontSize: 24,
      },
      h5: {
        fontSize: 20,
      },
      h6: {
        fontSize: 18,
      },
    },
  }
}
