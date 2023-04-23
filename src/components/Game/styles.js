import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  gameContainer: {
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    margin: 'auto',
    maxWidth: '768px',
  },
  hideInput: {
    opacity: 0,
    top: -10000,
  },
  imageContainer: {
    backgroundColor: theme.palette.black.main,
    border: `3px solid ${theme.palette.black.main}`,
    borderBottom: 'none',
    margin: 'auto',
    position: 'relative',
    top: '75px',
    width: '30vh',
  },
}))

export default useStyles
