/* eslint-disable no-bitwise */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */
import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import Keyboard from 'react-simple-keyboard'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useTheme } from '@mui/styles'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import LevelAcertijos from '../LevelAdivinanzas'
import LevelEmojis from '../LevelEmojis'
import LevelPeliculas from '../LevelPeliculas'
import LevelJugadores from '../LevelJugadores'
import LevelSombras from '../LevelSombras'
import LevelLogos from '../LevelLogos'
import LevelFunkos from '../LevelFunkos'
import LevelEscudos from '../LevelEscudos'
import LevelBanderas from '../LevelBanderas'
import {
  ACERTIJOS,
  PELICULAS,
  LOGOS,
  EMOJIS,
  JUGADORES,
  SOMBRAS,
  FUNKOS,
  ESCUDOS,
  BANDERAS,
} from '../../constants/const'
import { useGameContext, Actions } from '../../store/game'
import 'react-simple-keyboard/build/css/index.css'
import useStyles from './styles'

const Game = () => {
  const classes = useStyles()
  const theme = useTheme()
  const { gameState, gameDispatch } = useGameContext()
  const navigate = useNavigate()
  const [level, setLevel] = useState()
  const [levelReached, setLevelReached] = useState()
  const [category, setCategory] = useState()
  const [word, setWord] = useState()
  const [rendered, setRendered] = useState(false)
  const [correctLetters, setCorrectLetters] = useState('_')
  const [wrongLetters, setWrongLetters] = useState('000')
  const [hideKeyboard, setHideKeyboard] = useState(false)
  const [minutesBlocked, setMinutesBlocked] = useState(300)

  const layout = {
    default: [
      '1 2 3 4 5 6 7 8 9 0',
      'Q W E R T Y U I O P',
      'A S D F G H J K L Ñ',
      'Z X C V B N M',
    ],
  }

  const handleWrongLetters = () => {
    const storage = JSON.parse(localStorage.getItem(gameState?.game?.category))

    if (wrongLetters?.includes('111') && storage?.timeBlocked === undefined) {
      setHideKeyboard(true)
      const timeBlocked = new Date(Date.now() + 5 * 60 * 1000)

      localStorage.setItem(
        gameState.game.category,
        JSON.stringify({
          levelReached: level,
          timeBlocked,
        })
      )
    }
  }

  useEffect(() => {
    if (gameState?.game) {
      const storage = JSON.parse(
        localStorage.getItem(gameState?.game?.category)
      )

      if (gameState?.game.level === storage?.levelReached) {
        if (new Date(storage?.timeBlocked) > Date.now()) {
          const mb = Math.abs(new Date(storage?.timeBlocked) - Date.now())
          const minutes = Math.floor(mb / 1000)

          setHideKeyboard(true)
          setWrongLetters('111')
          setMinutesBlocked(minutes)
        } else {
          localStorage.setItem(
            gameState.game.category,
            JSON.stringify({
              levelReached: gameState.game.level,
            })
          )
        }
      }
      setLevel(gameState.game.level)
      setCategory(gameState.game.category)
      setWord(gameState.game.word)
      setLevelReached(parseInt(storage?.levelReached || 1, 10))
    } else {
      navigate('/')
    }
    handleWrongLetters()
  }, [wrongLetters])

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
      case FUNKOS:
        return <LevelFunkos level={level} />
      case ESCUDOS:
        return <LevelEscudos level={level} />
      case BANDERAS:
        return <LevelBanderas level={level} />
      default:
        return <LevelAcertijos level={level} />
    }
  }

  const wordToGuess = () => {
    let answer

    if (rendered) {
      answer = correctLetters?.split('|')
    } else {
      answer = word?.split('|')
    }

    return answer?.map((k, id) => (
      <Stack
        key={Math.ceil(Math.random() * 10000)}
        direction="row"
        spacing={1}
        sx={{ justifyContent: 'center', mb: 2 }}
      >
        {answer[id].split('').map((key) => (
          <Paper
            key={Math.ceil(Math.random() * 10000)}
            className={
              key === ' ' ? classes.letterWithSpaceContainer : classes.letters
            }
            elevation={2}
          >
            {rendered ? key.toUpperCase() : key === ' ' ? '' : '_'}
          </Paper>
        ))}
      </Stack>
    ))
  }

  const handleKeyboard = (letter) => {
    setRendered(true)
    const answer = word.toLowerCase()
    const result = correctLetters.split('')

    if (
      gameState.game.level === levelReached &&
      !answer.includes(letter.toLowerCase())
    ) {
      setWrongLetters(wrongLetters.replace('0', '1'))
    }

    for (let i = 0; i < answer.length; i += 1) {
      if (answer.charAt(i).toUpperCase() !== letter.toUpperCase()) {
        if (result[i] === undefined) {
          result[i] = '_'
        }
        if (answer.charAt(i) === '|') {
          result[i] = '|'
        }
        if (answer.charAt(i) === ' ') {
          result[i] = ' '
        }
      } else {
        result[i] = answer.charAt(i)
      }
    }

    setCorrectLetters(result.toString().replace(/,/g, ''))

    if (result.toString().indexOf('_') < 0) {
      setHideKeyboard(true)
      gameDispatch({
        game: {
          category: gameState.game.category,
          level:
            levelReached === gameState.game.level
              ? gameState.game.level + 1
              : gameState.game.level,
        },
        type: Actions.UPDATE_LEVEL,
      })

      if (levelReached === gameState.game.level) {
        localStorage.setItem(
          gameState.game.category,
          JSON.stringify({ levelReached: level + 1 })
        )
      }
    }
  }

  return (
    <Box className={classes.gameContainer}>
      <Stack className={classes.lifeContainer} direction="row">
        {gameState?.game?.level === levelReached &&
          wrongLetters
            .split('')
            .map((k) =>
              k === '0' ? (
                <FavoriteIcon
                  key={Math.random()}
                  sx={{ color: theme.palette.white.main, fontSize: '2rem' }}
                />
              ) : (
                <FavoriteBorderIcon
                  key={Math.random()}
                  sx={{ color: theme.palette.white.main, fontSize: '2rem' }}
                />
              )
            )}
      </Stack>
      <Box
        className={classes.imageContainer}
        sx={{ width: isMobile ? '30vh' : '50vh' }}
      >
        {Image()}
      </Box>
      <Box sx={{ mt: 3 }}>{wordToGuess()}</Box>
      {!hideKeyboard && (
        <Stack className={classes.keyboardContainer}>
          <Keyboard
            layout={layout}
            layoutName="default"
            onChange={() => {}}
            onKeyPress={(e) => handleKeyboard(e)}
          />
        </Stack>
      )}
      <Dialog
        open={wrongLetters === '111'}
        sx={{
          '& .MuiDialog-paperScrollPaper': {
            borderRadius: '50%',
            overflow: 'hidden',
          },
        }}
      >
        <Stack>
          <CountdownCircleTimer
            colors={['#000', '#d9dbdf', '#aeb0b4', '#76787b']}
            colorsTime={[7, 5, 2, 0]}
            duration={minutesBlocked}
            isPlaying
            onComplete={() => {
              setHideKeyboard(false)
              setWrongLetters('000')
              localStorage.setItem(
                gameState.game.category,
                JSON.stringify({ levelReached })
              )
            }}
          >
            {({ remainingTime }) => (
              <Stack>
                <Typography sx={{ textAlign: 'center' }} variant="hxxl">
                  {remainingTime}
                </Typography>
                <Typography sx={{ textAlign: 'center' }} variant="body0">
                  Segundos
                </Typography>
              </Stack>
            )}
          </CountdownCircleTimer>
        </Stack>
      </Dialog>
    </Box>
  )
}

export default Game
