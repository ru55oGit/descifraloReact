import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  gameContainer: {
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    margin: 'auto',
    maxWidth: '768px',
  },
  imageContainer: {
    backgroundColor: theme.palette.black.main,
    border: `3px solid ${theme.palette.black.main}`,
    borderBottom: 'none',
    margin: '30px auto',
  },
  keyboardContainer: {
    bottom: 0,
    maxWidth: '768px',
    position: 'fixed',
    width: '100%',
  },
  letters: {
    backgroundColor: theme.palette.white.main,
    border: `2px solid ${theme.palette.black.main}`,
    borderRadius: 6,
    height: 24,
    marginLeft: '4px',
    overflow: 'hidden',
    paddingBottom: 0,
    paddingTop: 3,
    textAlign: 'center',
    width: 24,
  },
}))

export default useStyles
