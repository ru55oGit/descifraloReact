import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  gameContainer: {
    backgroundColor: theme.palette.primary.main,
    height: 'calc(100vh - 60px)',
    margin: 'auto',
    maxWidth: 'calc(414px + 16px)',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '414px',
    },
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.white.main,
    border: `3px solid ${theme.palette.black.main}`,
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    minHeight: 'auto',
    padding: '8px',
    textAlign: 'center',
    width: '75%',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '55vw',
    },
  },
  keyboardContainer: {
    bottom: 0,
    maxWidth: 'calc(414px + 16px)',
    position: 'fixed',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '414px',
    },
  },
  letterWithSpaceContainer: {
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    width: 5,
  },
  letters: {
    backgroundColor: theme.palette.white.main,
    border: `2px solid ${theme.palette.black.main}`,
    borderRadius: 6,
    height: 24,
    marginLeft: '1px !important',
    overflow: 'hidden',
    paddingBottom: 0,
    paddingTop: 3,
    textAlign: 'center',
    width: 24,
  },
  lifeContainer: {
    height: '2rem',
    justifyContent: 'flex-end',
    padding: '4px 8px',
  },
  souround: {
    background: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 8px 0',
  },
}))

export default useStyles
