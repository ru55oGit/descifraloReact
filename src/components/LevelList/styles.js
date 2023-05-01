import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  listContainer: {
    backgroundColor: theme.palette.white.main,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    height: 'auto',
    maxWidth: 768,
    width: '100vw',
  },
}))

export default useStyles
