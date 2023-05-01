import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  containerLevel: {
    margin: 'auto',
    maxWidth: '768px',
    paddingTop: '61px',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

export default useStyles
