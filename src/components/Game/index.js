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
  const [word, setWord] = useState()
  const [rendered, setRendered] = useState(false)
  const [correctLetters, setCorrectLetters] = useState('_')
  const [hideKeyboard, setHideKeyboard] = useState(false)

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
      setWord(gameState.game.word)
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
            className={classes.letters}
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
    const answer = word
    const result = correctLetters.split('')

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
      // this.setState({ levelReached: this.props.image_to_guess.level + 1 })
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
