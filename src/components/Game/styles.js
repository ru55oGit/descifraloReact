import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  gameContainer: {
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    margin: 'auto',
    maxWidth: '768px',
    paddingTop: 85,
  },
  imageContainer: {
    backgroundColor: theme.palette.black.main,
    border: `3px solid ${theme.palette.black.main}`,
    borderBottom: 'none',
    margin: 'auto',
  },
  keyboardContainer: {
    bottom: 0,
    position: 'fixed',
    width: '100%',
  },
  letters: {
    backgroundColor: theme.palette.white.main,
    border: `2px solid ${theme.palette.black.main}`,
    borderRadius: 6,
    height: 24,
    marginRight: 1,
    overflow: 'hidden',
    paddingBottom: 0,
    paddingTop: 3,
    textAlign: 'center',
    width: 24,
  },
}))

export default useStyles
