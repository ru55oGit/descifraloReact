/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */
import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import Keyboard from 'react-simple-keyboard'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useTheme } from '@mui/styles'
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

  const layout = {
    default: [
      '1 2 3 4 5 6 7 8 9 0',
      'Q W E R T Y U I O P',
      'A S D F G H J K L Ñ',
      'Z X C V B N M',
    ],
  }

  const handleWrongLetters = () => {
    if (wrongLetters?.includes('111')) {
      setHideKeyboard(true)
    }
  }

  useEffect(() => {
    if (gameState?.game) {
      setLevel(gameState.game.level)
      setCategory(gameState.game.category)
      setWord(gameState.game.word)
      setLevelReached(
        parseInt(localStorage.getItem(gameState.game.category) || 1, 10)
      )
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

    if (!answer.includes(letter.toLowerCase())) {
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
            levelReached <= gameState.game.level
              ? gameState.game.level + 1
              : levelReached,
        },
        type: Actions.UPDATE_LEVEL,
      })
      if (levelReached <= gameState.game.level) {
        localStorage.setItem(gameState.game.category, level + 1)
      }
    }
  }

  return (
    <Box className={classes.gameContainer}>
      <Stack className={classes.lifeContainer} direction="row">
        {wrongLetters &&
          wrongLetters
            .split('')
            .map((k) =>
              k === '0' ? (
                <FavoriteIcon
                  sx={{ color: theme.palette.white.main, fontSize: '2rem' }}
                />
              ) : (
                <FavoriteBorderIcon
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
    </Box>
  )
}

export default Game
