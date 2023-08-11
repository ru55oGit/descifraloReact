import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  chipContainer: {
    alignItems: 'flex-end',
    background: theme.palette.white.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: `${theme.borderRadius[3]}px`,
    display: 'flex',
    height: '90px',
    margin: '50px auto',
    position: 'relative',
    width: '90%',
  },
  imageContainer: {
    '& SVG': {
      borderRadius: `${theme.borderRadius[3]}px`,
    },
    position: 'absolute',
    right: '20px',
    top: '-40px',
    width: 90,
  },
  textContainer: {
    paddingLeft: '16px',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

export default useStyles
