import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
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
  containerLevel: {
    // border: `1px solid ${theme.palette.black.main}`,
    margin: 'auto',
    maxWidth: '768px',
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
