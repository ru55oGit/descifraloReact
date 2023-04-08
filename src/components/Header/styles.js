import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    alignItems: 'center',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: `${theme.borderRadius[0]}px`,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}))

export default useStyles
