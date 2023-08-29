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
  gridItem: {
    borderRadius: '12px',
    boxShadow: '0 3px 1px 1px rgba(0, 0, 0, 0.75)',
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
    justifyContent: 'space-between',
    margin: '10px auto',
    textAlign: 'center',
  },
  menu: {
    left: '50%',
    position: 'fixed',
    top: 55,
    transform: 'translate(-50%, 5px)',
    zIndex: 1400,
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
}))

export default useStyles
