import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ProgressBar } from 'react-loader-spinner'
import Collapse from '@mui/material/Collapse'
import { useTheme } from '@mui/styles'
import LevelAdivinanzas from '../components/Levels/LevelAdivinanzas'
import LevelEmojis from '../components/Levels/LevelEmojis'
import LevelPeliculas from '../components/Levels/LevelPeliculas'
import LevelLogos from '../components/Levels/LevelLogos'
import LevelJugadores from '../components/Levels/LevelJugadores'
import LevelSombras from '../components/Levels/LevelSombras'
import LevelFunkos from '../components/Levels/LevelFunkos'
import LevelEscudos from '../components/Levels/LevelEscudos'
import LevelBanderas from '../components/Levels/LevelBanderas'
import Donate from '../components/Donate'
import NavBar from '../components/NavBar'
import { useGameContext, Actions } from '../store/game'
import useStyles from '../styles/pages'
import getWordToGuess from '../utils'

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

const LevelsPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()
  const scrollToRef = useRef(null)
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
      setList(getWordToGuess(gameState.game.category))
      if (scrollToRef.current) {
        scrollToRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    } else {
      navigate('/')
    }
  }, [gameState, navigate, list])

  const handleClick = (level) => {
    gameDispatch({
      game: {
        category: gameState.game.category,
        level: level + 1,
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
      {!list && (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            height: '100vh',
            justifyContent: 'center',
          }}
        >
          <ProgressBar
            barColor={theme.palette.primary.main}
            borderColor={theme.palette.primary.main}
            height="100"
            visible
            width="100"
            wrapperStyle={{}}
          />
        </Box>
      )}
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
                ref={levelReached === i + 1 ? scrollToRef : null}
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
