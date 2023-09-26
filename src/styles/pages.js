import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  backgroundIntro: {
    backgroundColor: theme.palette.primary.main,
    backgroundSize: '64px 96px',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    margin: 'auto',
    maxWidth: '414px',
  },
  backgroundSuccess: {
    background: theme.palette.white.main,
    borderStyle: 'double',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'space-between',
    margin: '16px auto',
    maxWidth: '414px',
    minHeight: '85vh',
    padding: '30px 8px',
    width: '90%',
  },
  boxContainer: {
    backgroundColor: 'transparent',
  },
  darkButton: {
    background: 'transparent',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: `${theme.borderRadius[1]}px`,
    color: theme.palette.text.primary,
    margin: '24px auto 0',
    padding: '8px 16px',
    width: '95%',
  },
  error: {
    color: theme.palette.error.main,
  },
  gridItem: {
    borderRadius: '12px',
    boxShadow: '0 3px 5px 1px rgba(0, 0, 0, 0.75)',
    display: 'flex',
    flexDirection: 'column',
    height: '110px',
    justifyContent: 'space-between',
    margin: '10px auto',
    padding: '8px',
    textAlign: 'center',
  },
  menu: {
    left: '50%',
    position: 'fixed',
    top: 55,
    transform: 'translate(-50%, 5px)',
    zIndex: 1400,
  },
  modal: {
    background: 'rgba(168, 168, 168, 0.9)',
    height: '100vh',
    margin: 'auto',
    maxWidth: 'calc(414px + 16px)',
  },
  success: {
    color: theme.palette.success.checkmark,
  },
  transparentButton: {
    background: 'transparent',
    border: `1px solid ${theme.palette.white.main}`,
    borderRadius: `${theme.borderRadius[1]}px`,
    color: theme.palette.white.main,
    margin: 'auto',
    padding: '8px 32px',
    width: 'calc(85% - 32px)',
  },
  warning: {
    color: theme.palette.warning.dark,
  },
}))

export default useStyles
