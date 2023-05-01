import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    backgroundColor: theme.backgrounds[2],
  },
  menu: {
    left: '50%',
    position: 'fixed',
    top: 55,
    transform: 'translate(-50%, 5px)',
  },
}))

export default useStyles
