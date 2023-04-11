import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '768px',
  },
  row: {
    alignItems: 'center',
    height: '100%',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

export default useStyles
