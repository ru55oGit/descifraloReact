import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  containerLevel: {
    margin: 'auto',
    maxWidth: '768px',
    paddingTop: '61px',
  },
  done: {
    color: '#49dd49',
    fontSize: '7rem',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

export default useStyles
