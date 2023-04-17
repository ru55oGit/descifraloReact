import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      },
      backgroundColor: theme.palette.white.main,
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.borderRadius[0],
    color: theme.palette.white.main,
    paddingLeft: 14,
    width: 'auto',
  },

  navBar: {
    alignItems: 'center',
    backgroundColor: theme.palette.white.main,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    display: 'flex',
    height: 50,
    justifyContent: 'space-between',
    padding: 8,
  },
}))

export default useStyles
