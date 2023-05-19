import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  downloadContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: 10,
  },
  gameContainer: {
    backgroundColor: theme.palette.primary.main,
    height: 'calc(100vh - 90px)',
    margin: 'auto',
    maxWidth: '768px',
  },
  imageContainer: {
    backgroundColor: theme.palette.black.main,
    border: `3px solid ${theme.palette.black.main}`,
    borderBottom: 'none',
    margin: 'auto',
  },
  keyboardContainer: {
    bottom: 0,
    maxWidth: '768px',
    position: 'fixed',
    width: '100%',
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
    padding: 10,
  },
}))

export default useStyles
