import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  chipContainer: {
    alignItems: 'flex-end',
    background: theme.palette.white.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: `${theme.borderRadius[3]}px`,
    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.5)',
    display: 'flex',
    height: '110px',
    justifyContent: 'flex-start',
    margin: '50px auto',
    position: 'relative',
    textAlign: 'left',
    width: '95%',
  },
  imageContainer: {
    '& SVG': {
      borderRadius: `${theme.borderRadius[3]}px`,
    },
    cursor: 'pointer',
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
