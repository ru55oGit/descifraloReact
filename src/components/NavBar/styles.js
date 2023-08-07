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
    height: 45,
    justifyContent: 'space-between',
    left: '50%',
    maxWidth: '414px',
    padding: 8,
    transform: 'translate(-50%, 0px)',
    width: 'calc(100% - 16px)',
    zIndex: 11111,
  },
}))

export default useStyles
