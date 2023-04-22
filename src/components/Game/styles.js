import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  gameContainer: {
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
  },
  hideInput: {
    opacity: 0,
    top: -10000,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '75px',
  },
}))

export default useStyles
