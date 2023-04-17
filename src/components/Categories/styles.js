import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  containerLevel: {
    margin: 'auto',
    maxWidth: '768px',
    paddingTop: '62px',
  },
  row: {
    alignItems: 'center',
    cursor: 'pointer',
    height: '100%',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

export default useStyles
