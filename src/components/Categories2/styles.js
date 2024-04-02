import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  containerCategories: {
    background: theme.backgrounds[2],
    margin: 'auto',
    maxWidth: 'calc(414px - 4px)',
    padding: '60px 10px 0',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

export default useStyles
