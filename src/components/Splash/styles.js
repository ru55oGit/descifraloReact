import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    background: `linearGradient(120deg, #fff, ${theme.palette.primary.main})`,
    padding: '10em 0',
  },
}))

export default useStyles
