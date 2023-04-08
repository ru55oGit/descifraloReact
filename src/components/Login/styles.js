import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}))

export default useStyles
