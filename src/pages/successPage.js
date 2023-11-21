/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-restricted-syntax */
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useNavigate, useLocation } from 'react-router-dom'
import { useParams } from 'react-router'
import { useTheme } from '@mui/styles'
import { useGameContext, Actions } from '../store/game'
import { useLanguageContext } from '../store/language'
import i18n from '../constants/i18n.json'
import useStyles from '../styles/pages'
import { ALEATORIO } from '../constants/const'
import { isDevice } from '../utils'

const SuccessPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()
  const { gameDispatch, gameState } = useGameContext()
  const { languageState } = useLanguageContext()
  const { category } = useParams()
  const { state } = useLocation()
  const [session, setSession] = useState()

  useEffect(() => {
    if (state.title) {
      const storedDataJSON = sessionStorage.getItem(state.title)

      if (!storedDataJSON) {
        sessionStorage.setItem(
          state.title,
          JSON.stringify({ correct: state.answer, questions: 1 })
        )
      } else {
        const storedData = JSON.parse(storedDataJSON)

        storedData.questions += 1
        storedData.correct += state.answer

        sessionStorage.setItem(state.title, JSON.stringify(storedData))
      }
      setSession(sessionStorage)
    }
  }, [state.answer, state.title])

  const goToCategories = () => {
    if (gameState?.game?.category !== ALEATORIO) {
      navigate('/niveles')
    } else {
      navigate('/categorias')
    }
  }

  const goToNext = () => {
    if (gameState?.game?.category !== ALEATORIO) {
      gameDispatch({
        game: {
          category,
          level:
            JSON.parse(
              localStorage?.getItem(`${category}_${languageState.language}`)
            )?.levelReached || 1,
        },
        type: Actions.UPDATE_LEVEL,
      })
    }
    navigate('/jugar')
  }

  const buttonNext = () =>
    !isDevice ? (
      <Button className={classes.darkButton} onClick={() => goToNext()}>
        <Typography variant="h1">
          {i18n.texts[languageState.language].next}
        </Typography>
      </Button>
    ) : (
      <Button className={classes.darkButton} onTouchEnd={() => goToNext()}>
        <Typography variant="h1">
          {i18n.texts[languageState.language].next}
        </Typography>
      </Button>
    )

  const buttonCategory = () =>
    !isDevice ? (
      <Button className={classes.darkButton} onClick={() => goToCategories()}>
        <Typography variant="h1">
          {gameState?.game?.category !== ALEATORIO
            ? i18n.texts[languageState.language].levels
            : i18n.texts[languageState.language].categories}
        </Typography>
      </Button>
    ) : (
      <Button
        className={classes.darkButton}
        onTouchEnd={() => goToCategories()}
      >
        <Typography variant="h1">
          {gameState?.game?.category !== ALEATORIO
            ? i18n.texts[languageState.language].levels
            : i18n.texts[languageState.language].categories}
        </Typography>
      </Button>
    )

  const getStatistics = () => {
    const rows = []
    const keys = Object.keys(session)

    for (const key of keys) {
      const { questions, correct } = JSON.parse(sessionStorage.getItem(key))
      const percentage = ((correct / questions) * 100).toFixed(2)

      rows.push(
        <Grid key={key} className={classes.gridItem} item xs={5.5}>
          <Typography
            fontWeight={theme.fontWeight.bold}
            sx={{ lineHeight: 1 }}
            variant="h2"
          >
            {key}
          </Typography>
          <Stack>
            <Typography variant="body1">{`${correct} de ${questions}`}</Typography>
            <Typography
              className={clsx(
                percentage > 69 && classes.success,
                percentage > 49 && percentage < 70 && classes.warning,
                percentage < 50 && classes.error
              )}
              fontWeight={theme.fontWeight.bold}
              variant="h3"
            >
              {percentage}%
            </Typography>
          </Stack>
        </Grid>
      )
    }

    return rows
  }

  return (
    <Box className={classes.backgroundSuccess}>
      {state.title && <Grid container>{session && getStatistics()}</Grid>}

      {!state.title && (
        <Stack sx={{ textAlign: 'center' }}>
          <CheckCircleIcon
            color="success"
            sx={{ fontSize: 200, margin: 'auto' }}
          />
          <Typography color="success.main" variant="hxxl">
            {i18n.texts[languageState.language].correct}
          </Typography>
        </Stack>
      )}

      <Grid container spacing={1}>
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }} xs={6}>
          {buttonNext()}
        </Grid>
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }} xs={6}>
          {buttonCategory()}
        </Grid>
      </Grid>
    </Box>
  )
}

export default SuccessPage
