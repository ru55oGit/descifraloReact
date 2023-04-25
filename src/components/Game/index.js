/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { isMobile, MobileView } from 'react-device-detect'
import Keyboard from 'react-simple-keyboard'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
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
import 'react-simple-keyboard/build/css/index.css'
import useStyles from './styles'

const Game = () => {
  const classes = useStyles()
  const { gameState } = useGameContext()
  const navigate = useNavigate()
  const [level, setLevel] = useState()
  const [category, setCategory] = useState()

  const layout = {
    default: [
      '1 2 3 4 5 6 7 8 9 0',
      'Q W E R T Y U I O P',
      'A S D F G H J K L',
      'Z X C V B N M',
    ],
  }

  useEffect(() => {
    if (gameState?.game) {
      setLevel(gameState.game.level)
      setCategory(gameState.game.category)
    } else {
      navigate('/')
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
      <Box
        className={classes.imageContainer}
        sx={{ width: isMobile ? '30vh' : '50vh' }}
      >
        {Image()}
      </Box>
      <MobileView>
        <Stack className={classes.keyboardContainer}>
          <Keyboard
            layout={layout}
            layoutName="default"
            onChange={() => {}}
            onKeyPress={() => {}}
          />
        </Stack>
      </MobileView>
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
