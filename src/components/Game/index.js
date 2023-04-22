/* eslint-disable react/no-unstable-nested-components */
import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import LevelAcertijos from '../LevelAdivinanzas'
import LevelEmojis from '../LevelEmojis'
import LevelPeliculas from '../LevelPeliculas'
import LevelJugadores from '../LevelJugadores'
import LevelSombras from '../LevelSombras'
import LevelLogos from '../LevelLogos'
import {
  ACERTIJOS,
  PELICULAS,
  LOGOS,
  EMOJIS,
  JUGADORES,
  SOMBRAS,
} from '../../constants/const'
import { useGameContext } from '../../store'
import useStyles from './styles'

const Game = () => {
  const classes = useStyles()
  const inputRef = useRef(null)
  const { gameState } = useGameContext()
  const navigate = useNavigate()
  const [level, setLevel] = useState()
  const [category, setCategory] = useState()

  useEffect(() => {
    if (gameState?.game) {
      setLevel(gameState.game.level)
      setCategory(gameState.game.category)
    } else {
      navigate('/niveles')
    }
  }, [gameState, navigate])

  const Image = () => {
    switch (category) {
      case ACERTIJOS:
        return <LevelAcertijos level={level} />
      case PELICULAS:
        return <LevelPeliculas level={level} />
      case LOGOS:
        return <LevelLogos level={level} />
      case EMOJIS:
        return <LevelEmojis level={level} />
      case JUGADORES:
        return <LevelJugadores level={level} />
      case SOMBRAS:
        return <LevelSombras level={level} />
      default:
        return <LevelAcertijos level={level} />
    }
  }

  return (
    <Box className={classes.gameContainer}>
      <NavBar />
      <Box className={classes.imageContainer}>{Image()}</Box>
      <TextField
        ref={inputRef}
        autoFocus
        className={classes.hideInput}
        label="Outlined"
        variant="outlined"
      />
    </Box>
  )
}

export default Game

Game.propTypes = {
  image: PropTypes.shape({
    category: PropTypes.string,
    level: PropTypes.number,
  }).isRequired,
}
