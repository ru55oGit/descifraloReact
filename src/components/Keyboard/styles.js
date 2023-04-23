import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    border: `1px solid ${theme.palette.divider}`,
    minWidth: '40px',
  },
  keyboardContainer: {
    backgroundColor: theme.backgrounds[0],
    bottom: 0,
    position: 'absolute',
  },
}))

export default useStyles
