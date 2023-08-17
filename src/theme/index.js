import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
  backgrounds: [
    '#FAFBFB',
    '#FFFFFF',
    '#E8E9EB',
    '#FDF8F6',
    '#EDF8F9',
    '#EFF3FD',
    'rgba(196, 196, 196, 0.5)',
    '#949494',
    'rgba(24, 26, 54, 0.8)',
  ],
  borderRadius: [8, 12, 16, 24, 50],
  fontWeight: {
    bold: 700,
    regular: 400,
    semibold: 600,
  },
  palette: {
    black: {
      dark: '#000',
      main: '#181A36',
    },
    divider: '#F6F6F7',
    error: {
      light: '#FDE6E6',
      main: '#D32121',
    },
    info: {
      dark: '#00A0AD',
      light: '#E4F4F6',
      main: '#017B89',
    },
    primary: {
      dark: '#006470',
      light: '#FCD4C5',
      main: '#ee393e',
      strong: '#F53B02',
    },
    secondary: {
      light: '#FCF1ED',
      main: '#8A8B99',
    },
    shadows: {
      btnSwitch: 'rgba(24, 26, 54, 0.12)',
      button: 'rgba(252, 76, 2, 0.2)',
      card: 'rgba(24, 26, 54, 0.04)',
      overlay: 'rgba(24, 26, 54, 0.4)',
    },
    success: {
      checkmark: '#2D9F70',
      light: '#DEF5EB',
      main: '#177850',
    },
    text: {
      disabled: '#BABBC3',
      light: '#2C2E47',
      primary: '#5E5F73',
      secondary: '#8A8B99',
    },
    warning: {
      dark: '#FFB023',
      light: '#FDF6EA',
      main: '#A06000',
    },
    white: {
      main: '#FFF',
    },
  },
  space: [0, 4, 8, 12, 16, 24, 32],
  typography: {
    body0: {
      fontSize: 12,
      lineHeight: 18 / 12,
    },
    body1: {
      fontSize: 14,
      lineHeight: 20 / 14,
    },
    body2: {
      fontSize: 16,
      lineHeight: 24 / 16,
    },
    fontFamily: 'Averta',
    h1: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 40 / 28,
    },
    h2: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 30 / 20,
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 28 / 18,
    },
    h4: {
      fontSize: 16,
      lineHeight: 24 / 16,
    },
    hxl: {
      fontSize: 26,
      lineHeight: 40 / 26,
    },
    hxxl: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 48 / 32,
    },
  },
})

export default responsiveFontSizes(theme)
