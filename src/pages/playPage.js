import { useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Game from '../components/Game'
import NavBar from '../components/NavBar'
import Donate from '../components/Donate'

import useStyles from '../styles/pages'
import { useGameContext } from '../store/game'

const PlayPage = () => {
  const classes = useStyles()
  const [openDonate, setOpenDonate] = useState(false)
  const { gameState } = useGameContext()

  return (
    <Box className={classes.boxContainer}>
      <NavBar
        backArrow
        level={gameState?.game?.level}
        openDonate={openDonate}
        setOpenDonate={setOpenDonate}
      />
      <Collapse className={classes.menu} in={openDonate}>
        <Donate />
      </Collapse>
      <Game />
    </Box>
  )
}

export default PlayPage
