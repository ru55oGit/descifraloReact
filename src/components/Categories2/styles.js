import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  containerLevel: {
    margin: 'auto',
    maxWidth: 'calc(414px + 16px)',
    padding: '60px 10px',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

export default useStyles
