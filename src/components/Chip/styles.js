import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  chipContainer: {
    alignItems: 'center',
    background: theme.palette.white.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: `${theme.borderRadius[3]}px`,
    // boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.5)',
    display: 'flex',
    height: '110px',
    justifyContent: 'flex-start',
    margin: '55px auto',
    padding: '8px 0',
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
    right: '10px',
    top: '-50px',
    width: 110,
    zIndex: 1,
  },
  textCategories: {
    backgroundClip: 'text',
    color: theme.palette.primary.main,
    fontSize: '1.4rem',
    lineHeight: 1,
    margin: 0,
    textTransform: 'uppercase',
  },
  textContainer: {
    '& .MuiButton-root': {
      justifyContent: 'start',
      marginLeft: '-5px',
      padding: 0,
      width: 160,
    },
    paddingLeft: '16px',
    textAlign: 'left',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

export default useStyles
