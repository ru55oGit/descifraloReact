/* eslint-disable consistent-return */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useNavigate, useLocation } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router'
import { useTheme } from '@mui/styles'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useGameContext, Actions } from '../store/game'
import useStyles from '../styles/pages'
import { ALEATORIO } from '../constants/const'

const SuccessPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()
  const { gameDispatch, gameState } = useGameContext()
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

  const goToNext = (e) => {
    e.preventDefault()

    if (gameState?.game?.category !== ALEATORIO) {
      gameDispatch({
        game: {
          category,
          level: JSON.parse(localStorage?.getItem(category))?.levelReached || 1,
        },
        type: Actions.UPDATE_LEVEL,
      })
    }
    navigate('/jugar')
  }

  const goToCategories = (e) => {
    e.preventDefault()
    if (gameState?.game?.category !== ALEATORIO) {
      navigate('/niveles')
    } else {
      navigate('/categorias')
    }
  }

  const getStatistics = () => {
    const rows = []
    const keys = Object.keys(session)

    for (const key of keys) {
      const { questions, correct } = JSON.parse(sessionStorage.getItem(key))

      rows.push(
        <Grid key={key} className={classes.gridItem} item xs={5.5}>
          <Typography
            fontWeight={theme.fontWeight.bold}
            sx={{ lineHeight: 1 }}
            variant="h1"
          >
            {key}
          </Typography>
          <Stack>
            <Typography variant="body1">{`${correct} de ${questions}`}</Typography>
            <Typography variant="h3">
              {((correct / questions) * 100).toFixed(2)}%
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
            Correcto
          </Typography>
        </Stack>
      )}

      <Grid container spacing={1}>
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }} xs={6}>
          <Button className={classes.darkButton} onClick={(e) => goToNext(e)}>
            <Typography variant="h1">Siguiente</Typography>
          </Button>
        </Grid>
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }} xs={6}>
          <Button
            className={classes.darkButton}
            onClick={(e) => goToCategories(e)}
          >
            <Typography variant="h1">
              {gameState?.game?.category !== ALEATORIO
                ? 'Niveles'
                : 'Categorías'}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SuccessPage
