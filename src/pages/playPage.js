import Box from '@mui/material/Box'
import Game from '../components/Game'
import useStyles from '../styles/pages'

const PlayPage = () => {
  const classes = useStyles()

  return (
    <Box className={classes.boxContainer}>
      <Game />
    </Box>
  )
}

export default PlayPage
