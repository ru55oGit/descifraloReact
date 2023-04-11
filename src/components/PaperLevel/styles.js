import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    '& .MuiTypography-root': {
      fontFamily: 'BlinkMacSystemFont, san-serif',
    },
    alignItems: 'center',
    color: theme.palette.white.main,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

export default useStyles
