import { ThemeTypes } from 'src/types'

export const colors: Record<string, Record<number, string>> = {
  grey: {
    0: '#FFFFFF',
    10: '#F6F6F6',
    50: '#F0F0F0',
    100: '#E0E0E0',
    200: '#C2C2C2',
    300: '#A3A3A3',
    400: '#858585',
    500: '#666666',
    600: '#4D4D4D',
    700: '#333333',
    800: '#1A1A1A',
    900: '#0A0A0A',
    1000: '#000000',
  },
  primary: {
    50: '#E6FBFF',
    100: '#CCF7FE',
    200: '#99EEFD',
    300: '#66E6FC',
    400: '#33DDFB',
    500: '#00D5FA',
    600: '#00A0BC',
    700: '#006B7D',
    800: '#00353F',
    900: '#001519',
  },
}

export const themeSettings = (mode: ThemeTypes) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              dark: colors.primary[200],
              main: colors.primary[500],
              light: colors.primary[800],
            },
            secondary: {
              dark: colors.grey[100],
              main: colors.grey[200],
              mediumMain: colors.grey[300],
              medium: colors.grey[400],
              light: colors.grey[700],
            },
            background: {
              default: colors.grey[900],
              alt: colors.grey[800],
            },
          }
        : {
            primary: {
              dark: colors.primary[700],
              main: colors.primary[500],
              light: colors.primary[50],
            },
            secondary: {
              dark: colors.grey[700],
              main: colors.grey[500],
              mediumMain: colors.grey[400],
              medium: colors.grey[300],
              light: colors.grey[50],
            },
            background: {
              default: colors.grey[10],
              alt: colors.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 14,
      h1: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 28,
      },
      h4: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h5: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h6: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 18,
      },
    },
  }
}
