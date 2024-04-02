import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  backgroundIntro: {
    background: 'linear-gradient(#a34747, #F44336)',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '430px',
    position: 'relative',
  },
  backgroundSuccess: {
    background: 'linear-gradient(#a34747, #F44336)',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: '430px',
    minHeight: 'calc(100vh - 32px)',
    padding: '0 8px 32px',
    position: 'relative',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      padding: '0 21px 32px',
    },
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
    background: theme.palette.white.main,
    borderRadius: '12px',
    boxShadow: '0 3px 5px 1px rgba(0, 0, 0, 0.75)',
    display: 'flex',
    flexDirection: 'column',
    height: '130px',
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
    maxWidth: 'calc(430px + 16px)',
  },
  success: {
    color: theme.palette.success.checkmark,
  },
  successContainer: {
    background: theme.palette.white.main,
    borderRadius: '16px',
    height: '50%',
    margin: 'auto',
    width: '80%',
  },
  transparentButton: {
    background: 'transparent',
    border: `1px solid ${theme.palette.white.main}`,
    borderRadius: `${theme.borderRadius[1]}px`,
    color: theme.palette.white.main,
    margin: 'auto',
    padding: '8px 32px',
    width: 'calc(100% - 16px)',
  },
  warning: {
    color: theme.palette.warning.dark,
  },
}))

export default useStyles
