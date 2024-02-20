import { useState } from 'react'
import Box from '@mui/material/Box'
import Game from 'components/Game'
import NavBar from 'components/NavBar'

import useStyles from 'styles/pages'
import { useGameContext } from 'store/game'

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
      <Game />
    </Box>
  )
}

export default PlayPage
