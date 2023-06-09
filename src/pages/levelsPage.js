import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import { useTheme } from '@mui/styles'
import Donate from '../components/Donate'
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
  FUNKOS,
  ESCUDOS,
  BANDERAS,
} from '../constants/const'
import LevelAdivinanzas from '../components/LevelAdivinanzas'
import LevelEmojis from '../components/LevelEmojis'
import LevelPeliculas from '../components/LevelPeliculas'
import LevelLogos from '../components/LevelLogos'
import LevelJugadores from '../components/LevelJugadores'
import LevelSombras from '../components/LevelSombras'
import LevelFunkos from '../components/LevelFunkos'
import LevelEscudos from '../components/LevelEscudos'
import LevelBanderas from '../components/LevelBanderas'

import dataAcertijos from '../data/adivinanzas.json'
import dataEmojis from '../data/emojis.json'
import dataPeliculas from '../data/peliculas.json'
import dataLogos from '../data/marcas.json'
import dataJugadores from '../data/jugadores.json'
import dataSombras from '../data/sombras.json'
import dataFunkos from '../data/funkos.json'
import dataEscudos from '../data/escudos.json'
import dataBanderas from '../data/banderas.json'

const LevelsPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()
  const { gameState, gameDispatch } = useGameContext()
  const [list, setList] = useState()
  const [levelReached, setLevelReached] = useState()
  const [openDonate, setOpenDonate] = useState(false)

  useEffect(() => {
    if (gameState.game) {
      setLevelReached(
        parseInt(
          JSON.parse(localStorage.getItem(gameState.game.category))
            ?.levelReached || 1,
          10
        )
      )
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
        case FUNKOS:
          setList(dataFunkos.listado)
          break
        case ESCUDOS:
          setList(dataEscudos.listado)
          break
        case BANDERAS:
          setList(dataBanderas.listado)
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
        level: level + 1,
        word: list[level].respuesta,
      },
      type: Actions.UPDATE_LEVEL,
    })

    navigate('/jugar')
  }

  return (
    <Box className={classes.boxContainer}>
      <NavBar
        backArrow
        fixed
        openDonate={openDonate}
        setOpenDonate={setOpenDonate}
      />
      <Collapse className={classes.menu} in={openDonate}>
        <Donate />
      </Collapse>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: 'auto',
          maxWidth: 'calc(768px + 16px)',
          pt: '64px',
        }}
      >
        {list &&
          list.map((k, i) =>
            levelReached >= i + 1 ? (
              <Button
                key={k.respuesta}
                onClick={() => handleClick(i)}
                sx={{
                  '& svg': {
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: '4px',
                    boxShadow: theme.palette.shadows.overlay,
                  },
                  p: '4px',
                  width: '24.8%',
                }}
              >
                {gameState.game.category === ACERTIJOS && (
                  <LevelAdivinanzas level={i + 1} />
                )}
                {gameState.game.category === EMOJIS && (
                  <LevelEmojis level={i + 1} />
                )}
                {gameState.game.category === PELICULAS && (
                  <LevelPeliculas level={i + 1} />
                )}
                {gameState.game.category === LOGOS && (
                  <LevelLogos level={i + 1} />
                )}
                {gameState.game.category === JUGADORES && (
                  <LevelJugadores level={i + 1} />
                )}
                {gameState.game.category === SOMBRAS && (
                  <LevelSombras level={i + 1} />
                )}
                {gameState.game.category === FUNKOS && (
                  <LevelFunkos level={i + 1} />
                )}
                {gameState.game.category === ESCUDOS && (
                  <LevelEscudos level={i + 1} />
                )}
                {gameState.game.category === BANDERAS && (
                  <LevelBanderas level={i + 1} />
                )}
              </Button>
            ) : (
              <Button
                key={k.respuesta}
                disabled
                sx={{
                  backgroundColor: theme.palette.white.main,
                  borderRadius: 0,
                  height: 'calc(25vw - 8px)',
                  margin: '3px',
                  maxHeight: 190,
                  width: 'calc(25% - 8px)',
                }}
              >
                <Typography variant="hxxl">{i + 1}</Typography>
              </Button>
            )
          )}
      </Box>
    </Box>
  )
}

export default LevelsPage
