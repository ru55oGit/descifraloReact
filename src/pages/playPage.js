import Box from '@mui/material/Box'
import Game from '../components/Game'
import NavBar from '../components/NavBar'
import useStyles from '../styles/pages'

const PlayPage = () => {
  const classes = useStyles()

  return (
    <Box className={classes.boxContainer}>
      <NavBar backArrow />
      <Game />
    </Box>
  )
}

export default PlayPage
