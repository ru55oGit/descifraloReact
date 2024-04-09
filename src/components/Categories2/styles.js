import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  containerCategories: {
    background: theme.backgrounds[2],
    margin: 'auto',
    maxWidth: 'calc(430px + 16px)',
    padding: '60px 0 0',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

export default useStyles
