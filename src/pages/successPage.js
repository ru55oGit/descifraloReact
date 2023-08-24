/* eslint-disable consistent-return */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useNavigate, useLocation } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router'
import { useTheme } from '@mui/styles'
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
  }, [])

  const handleClick = () => {
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

  const getStatistics = () => {
    const rows = []
    const keys = Object.keys(session)

    for (const key of keys) {
      const { questions, correct } = JSON.parse(sessionStorage.getItem(key))

      rows.push(
        <Stack key={key}>
          <Typography fontWeight={theme.fontWeight.bold} variant="hxl">
            {key}
          </Typography>
          <Typography variant="body1">{`${correct} de ${questions}`}</Typography>
          <Typography variant="h3">
            {((correct / questions) * 100).toFixed(2)}%
          </Typography>
        </Stack>
      )
    }

    return rows
  }

  return (
    <Box className={classes.backgroundSuccess}>
      {state.title && (
        <Box sx={{ textAlign: 'center' }}>{session && getStatistics()}</Box>
      )}
      <Box sx={{ textAlign: 'center' }}>
        <Button className={classes.darkButton} onClick={handleClick}>
          <Typography variant="hxl">Siguiente</Typography>
        </Button>
        <Button
          className={classes.darkButton}
          onClick={() => navigate('/categorias')}
        >
          <Typography variant="hxl">Categorías</Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default SuccessPage
