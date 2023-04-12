import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  containerLevel: {
    border: `1px solid ${theme.palette.black.main}`,
    margin: 'auto',
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
