/* eslint-disable quotes */
/* eslint-disable no-bitwise */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */
import { useState, useEffect, useCallback, useRef } from 'react'
import { toPng } from 'html-to-image'
import Keyboard from 'react-simple-keyboard'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useTheme } from '@mui/styles'
import { ALEATORIO, QUESTIONS } from 'constants/const'
import { useGameContext, Actions } from 'store/game'
import { useLanguageContext } from 'store/language'
import Shares from 'components/Shares'
import i18n from 'constants/i18n.json'
import { NEXT, LEVELS, CATEGORIES, STATISTICS } from 'constants/routes'
import 'react-simple-keyboard/build/css/index.css'
import { getWordToGuess, getImage, getQuestions, isDevice } from 'utils'
import useStyles from './styles'

const Game = () => {
  const classes = useStyles()
  const theme = useTheme()
  const refQR = useRef()
  const { gameState, gameDispatch } = useGameContext()
  const { languageState } = useLanguageContext()
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
  const [question, setQuestion] = useState()
  const [title, setTitle] = useState()

  const timerToString = () => {
    const minutes = `0${Math.floor(minutesBlocked / 60)}`.slice(-2)
    const seconds = `0${minutesBlocked % 60}`.slice(-2)

    return `${minutes}:${seconds}`
  }

  const layout = {
    default: [
      '1 2 3 4 5 6 7 8 9 0',
      'Q W E R T Y U I O P',
      'A S D F G H J K L Ñ',
      'Z X C V B N M',
    ],
  }

  useEffect(() => {
    let myTimeout = 0

    if (minutesBlocked > 0) {
      myTimeout = setTimeout(() => {
        setMinutesBlocked(minutesBlocked - 1)
      }, 1000)
    } else {
      setMinutesBlocked(300)
      setHideKeyboard(false)
      setWrongLetters('000')
      localStorage.setItem(
        `${gameState?.game?.category}_${languageState.language}`,
        JSON.stringify({ levelReached })
      )
    }

    return () => {
      clearTimeout(myTimeout)
    }
  }, [minutesBlocked])

  const handleDownload = useCallback(() => {
    const baseNode = refQR.current

    if (!baseNode) return

    toPng(baseNode, {
      backgroundColor: theme.palette.common.white,
      cacheBust: false,
    })
      .then((dataUrl) => {
        const linkToDownload = document.createElement('a')

        linkToDownload.download = `${category}-${level}.png`
        linkToDownload.href = dataUrl
        linkToDownload.click()
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Image download failed', err)
      })
  }, [refQR, level, theme])

  const handleWrongLetters = () => {
    const storage = JSON.parse(
      localStorage.getItem(
        `${gameState?.game?.category}_${languageState.language}`
      )
    )

    if (
      wrongLetters?.includes('111') &&
      gameState?.game?.category === ALEATORIO
    ) {
      navigate(`${NEXT}/${ALEATORIO}`, { state: { answer: 0, title } })
    } else if (
      wrongLetters?.includes('111') &&
      storage?.timeBlocked === undefined
    ) {
      setHideKeyboard(true)
      const timeBlocked = new Date(Date.now() + 5 * 60 * 1000)

      localStorage.setItem(
        `${gameState?.game?.category}_${languageState.language}`,
        JSON.stringify({
          levelReached: level,
          timeBlocked,
        })
      )
    }
  }

  useEffect(() => {
    handleWrongLetters()
  }, [wrongLetters])

  useEffect(() => {
    if (gameState?.game && gameState?.game?.category !== ALEATORIO) {
      const storage = JSON.parse(
        localStorage.getItem(
          `${gameState?.game?.category}_${languageState.language}`
        )
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
            `${gameState?.game?.category}_${languageState.language}`,
            JSON.stringify({
              levelReached: gameState.game.level,
            })
          )
        }
      }
      setLevel(gameState.game.level)
      setCategory(gameState.game.category)
      try {
        setWord(
          getWordToGuess(gameState?.game?.category, languageState.language)[
            gameState.game.level - 1
          ].respuesta
        )
      } catch (err) {
        navigate(LEVELS)
      }

      setLevelReached(parseInt(storage?.levelReached || 1, 10))
    } else if (gameState?.game?.category === ALEATORIO) {
      const { pregunta, categoria, respuesta, titulo } = getQuestions(
        languageState?.language
      )

      if (categoria === ALEATORIO) {
        setQuestion(pregunta)
      } else {
        setLevel(parseInt(pregunta, 10))
      }
      setCategory(categoria)
      setWord(respuesta)
      setTitle(titulo)
    } else {
      navigate(CATEGORIES)
    }

    return () => {
      if (gameState?.game) {
        gameDispatch({
          game: {
            category: gameState?.game?.category,
            level:
              levelReached === gameState.game.level
                ? gameState.game.level + 1
                : gameState.game.level,
            maxLevel: gameState.game.maxLevel,
          },
          type: Actions.UPDATE_LEVEL,
        })
      }
    }
  }, [])

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
        {answer[id].split('').map((key) =>
          key === "'" || key === '?' || key === '¿' ? (
            <Typography
              color="white.main"
              sx={{ lineHeight: '0.8' }}
              variant="hxl"
            >
              {key}
            </Typography>
          ) : (
            <Paper
              key={Math.ceil(Math.random() * 10000)}
              className={
                key === ' ' ? classes.letterWithSpaceContainer : classes.letters
              }
              elevation={2}
            >
              {rendered ? key.toUpperCase() : key === ' ' ? '' : '_'}
            </Paper>
          )
        )}
      </Stack>
    ))
  }

  const handleKeyboard = (letter) => {
    setRendered(true)
    const answer = word.toLowerCase()
    const result = correctLetters.split('')

    if (
      (gameState.game.level === levelReached ||
        gameState?.game?.category === ALEATORIO) &&
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
        if (answer.charAt(i) === "'") {
          result[i] = "'"
        }
        if (answer.charAt(i) === '¿') {
          result[i] = '¿'
        }
        if (answer.charAt(i) === '?') {
          result[i] = '?'
        }
      } else {
        result[i] = answer.charAt(i)
      }
    }

    setCorrectLetters(result.toString().replace(/,/g, ''))

    if (result.toString().indexOf('_') < 0) {
      setHideKeyboard(true)

      if (levelReached === gameState.game.level) {
        const lvl =
          level + 1 > gameState?.game?.maxLevel
            ? gameState?.game?.maxLevel
            : level + 1

        localStorage.setItem(
          `${gameState?.game?.category}_${languageState.language}`,
          JSON.stringify({
            levelReached: lvl,
          })
        )
      }
      navigate(`${NEXT}/${category}`, { state: { answer: 1, title } })
    }
  }

  return (
    <Box className={classes.gameContainer}>
      <Stack className={classes.lifeContainer} direction="row">
        {(gameState?.game?.level === levelReached ||
          gameState?.game?.category === ALEATORIO) &&
          wrongLetters
            .split('')
            .map((k) =>
              k === '0' ? (
                <FavoriteIcon
                  key={Math.random()}
                  sx={{ color: theme.palette.white.main, fontSize: '3rem' }}
                />
              ) : (
                <FavoriteBorderIcon
                  key={Math.random()}
                  sx={{ color: theme.palette.white.main, fontSize: '3rem' }}
                />
              )
            )}
      </Stack>
      <Box ref={refQR}>
        <Box className={classes.souround}>
          {wrongLetters === '111' && (
            <Avatar
              src="/images/imaginalo.png"
              sx={{ height: 'auto', m: 'auto', p: 2, width: 'fit-content' }}
              variant="square"
            />
          )}
          {title && (
            <Typography
              align="center"
              color="white.main"
              sx={{ mb: '4px' }}
              variant="hxxl"
            >
              {title}
            </Typography>
          )}
          <Box
            className={classes.imageContainer}
            sx={{ width: isDevice ? '25vh' : '50vh' }}
          >
            {category !== QUESTIONS ? (
              getImage(category, level)
            ) : (
              <Typography variant="hxl">{question}</Typography>
            )}
          </Box>
          <Box sx={{ mt: 3 }}>{wordToGuess()}</Box>
          {wrongLetters === '111' && (
            <Typography
              color="primary.main"
              sx={{
                background: theme.palette.white.main,
                borderRadius: '4px',
                display: 'block',
                height: 40,
                margin: '16px auto',
                padding: 1,
                width: 'fit-content',
              }}
              variant="hxl"
            >
              {window.location.origin}
            </Typography>
          )}
        </Box>
      </Box>

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
            maxWidth: 'calc(430px + 16px)',
            overflow: 'hidden',
            p: 5,
            width: '90%',
          },
        }}
      >
        <Stack spacing={2} sx={{ '& h1 ~ div': { margin: 'auto' } }}>
          <Typography align="center" variant="h1">
            {i18n.texts[languageState?.language].downloadTitle}
          </Typography>
          <Typography align="center" sx={{ mb: 3 }} variant="hxxl">
            {timerToString()}
          </Typography>

          <Typography
            align="center"
            sx={{ margin: '16px auto !important', maxWidth: 200 }}
            variant="body2"
          >
            {i18n.texts[languageState?.language].downloadText}
          </Typography>
          <Button
            onClick={handleDownload}
            sx={{ border: `1px solid ${theme.palette.primary.main}` }}
          >
            {i18n.texts[languageState?.language].downloadAndShare}
          </Button>
        </Stack>
        <Shares />
        <Button onClick={() => navigate(STATISTICS)}>
          {i18n.texts[languageState?.language].statistics}
        </Button>
      </Dialog>
    </Box>
  )
}

export default Game
