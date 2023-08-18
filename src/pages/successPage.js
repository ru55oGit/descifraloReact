import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router'
import { useGameContext, Actions } from '../store/game'
import useStyles from '../styles/pages'
import { ALEATORIO } from '../constants/const'

const SuccessPage = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { gameDispatch, gameState } = useGameContext()
  const [level, setLevel] = useState()
  const { category } = useParams()

  useEffect(() => {
    setLevel(JSON.parse(localStorage?.getItem(category))?.levelReached || 1)
  }, [category])

  const handleClick = () => {
    if (gameState?.game?.category !== ALEATORIO) {
      gameDispatch({
        game: { category, level },
        type: Actions.UPDATE_LEVEL,
      })
    }
    navigate('/jugar')
  }

  return (
    <Box className={classes.backgroundIntro}>
      <Button className={classes.transparentButton} onClick={handleClick}>
        <Typography variant="hxl">Jugar</Typography>
      </Button>
    </Box>
  )
}

export default SuccessPage
