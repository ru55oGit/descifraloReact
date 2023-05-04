import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NavBar from '../components/NavBar'
import { useGameContext, Actions } from '../store/game'
import useStyles from '../styles/pages'
import {
  ACERTIJOS,
  EMOJIS,
  PELICULAS,
  LOGOS,
  JUGADORES,
  SOMBRAS,
} from '../constants/const'
import LevelAdivinanzas from '../components/LevelAdivinanzas'
import LevelEmojis from '../components/LevelEmojis'
import LevelPeliculas from '../components/LevelPeliculas'
import LevelLogos from '../components/LevelLogos'
import LevelJugadores from '../components/LevelJugadores'
import LevelSombras from '../components/LevelSombras'

import dataAcertijos from '../data/adivinanzas.json'
import dataEmojis from '../data/emojis.json'
import dataPeliculas from '../data/peliculas.json'
import dataLogos from '../data/marcas.json'
import dataJugadores from '../data/jugadores.json'
import dataSombras from '../data/sombras.json'

const LevelsPage = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { gameState, gameDispatch } = useGameContext()
  const [list, setList] = useState()

  useEffect(() => {
    if (gameState.game) {
      switch (gameState.game.category) {
        case ACERTIJOS:
          setList(dataAcertijos.listado)
          break
        case EMOJIS:
          setList(dataEmojis.listado)
          break
        case PELICULAS:
          setList(dataPeliculas.listado)
          break
        case LOGOS:
          setList(dataLogos.listado)
          break
        case JUGADORES:
          setList(dataJugadores.listado)
          break
        case SOMBRAS:
          setList(dataSombras.listado)
          break
        default:
          setList(dataAcertijos.listado)
      }
    } else {
      navigate('/')
    }
  }, [gameState, navigate])

  const handleClick = (level) => {
    gameDispatch({
      game: {
        category: gameState.game.category,
        level,
        word: list[level].respuesta,
      },
      type: Actions.UPDATE_LEVEL,
    })

    navigate('/jugar')
  }

  return (
    <Box className={classes.boxContainer}>
      <NavBar backArrow fixed />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: 'auto',
          maxWidth: 'calc(768px + 36px)',
          pt: '64px',
        }}
      >
        {list &&
          list.map((k, i) => (
            <Box
              sx={{
                m: 'auto 2px',
                width: '23.5%',
              }}
            >
              {gameState.game.category === ACERTIJOS && (
                <Button onClick={() => handleClick(i + 1)}>
                  <LevelAdivinanzas level={i + 1} />
                </Button>
              )}
              {gameState.game.category === EMOJIS && (
                <Button onClick={() => handleClick(i + 1)}>
                  <LevelEmojis level={i + 1} />
                </Button>
              )}
              {gameState.game.category === PELICULAS && (
                <Button onClick={() => handleClick(i + 1)}>
                  <LevelPeliculas level={i + 1} />
                </Button>
              )}
              {gameState.game.category === LOGOS && (
                <Button onClick={() => handleClick(i + 1)}>
                  <LevelLogos level={i + 1} />
                </Button>
              )}
              {gameState.game.category === JUGADORES && (
                <Button onClick={() => handleClick(i + 1)}>
                  <LevelJugadores level={i + 1} />
                </Button>
              )}
              {gameState.game.category === SOMBRAS && (
                <Button onClick={() => handleClick(i + 1)}>
                  <LevelSombras level={i + 1} />
                </Button>
              )}
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default LevelsPage
