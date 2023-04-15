import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 25%, ${theme.palette.white.main} 25%, ${theme.palette.white.main} 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 75%, ${theme.palette.white.main} 75%, ${theme.palette.white.main} 100%)`,
    backgroundSize: '5.66px 5.66px',
  },
}))

export default useStyles
