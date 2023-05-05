import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import {
  Acertijos,
  Emojis,
  Logos,
  Peliculas,
  Jugadores,
  Sombras,
} from '../IconsCategories'
import {
  ACERTIJOS,
  PELICULAS,
  LOGOS,
  EMOJIS,
  JUGADORES,
  SOMBRAS,
} from '../../constants/const'
import LevelEmojis from '../LevelEmojis'
import LevelJugadores from '../LevelJugadores'
import LevelAdivinanzas from '../LevelAdivinanzas'
import LevelLogos from '../LevelLogos'
import LevelPeliculas from '../LevelPeliculas'
import LevelSombras from '../LevelSombras'
import useStyles from './styles'
import { useGameContext, Actions } from '../../store/game'

const Levels = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { gameDispatch } = useGameContext()
  const [levelAcertijos, setLevelAcertijos] = useState()
  const [levelEmojis, setLevelEmojis] = useState()
  const [levelLogos, setLevelLogos] = useState()
  const [levelPeliculas, setLevelPeliculas] = useState()
  const [levelJugadores, setLevelJugadores] = useState()
  const [levelSombras, setLevelSombras] = useState()

  useEffect(() => {
    setLevelAcertijos(localStorage?.getItem(ACERTIJOS) || 1)
    setLevelEmojis(localStorage?.getItem(EMOJIS) || 1)
    setLevelLogos(localStorage?.getItem(LOGOS) || 1)
    setLevelPeliculas(localStorage?.getItem(PELICULAS) || 1)
    setLevelJugadores(localStorage?.getItem(JUGADORES) || 1)
    setLevelSombras(localStorage?.getItem(SOMBRAS) || 1)
  }, [])

  const handleClick = (category, level) => {
    gameDispatch({
      game: { category, level },
      type: Actions.UPDATE_LEVEL,
    })

    navigate('/niveles')
  }

  return (
    <Box className={classes.containerLevel}>
      <Stack
        direction="row"
        onClick={() => handleClick(ACERTIJOS, levelAcertijos)}
      >
        <Stack sx={{ width: '50%' }}>
          <Acertijos />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <LevelAdivinanzas level={parseInt(levelAcertijos, 10)} />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(EMOJIS, levelEmojis)}>
        <Stack sx={{ width: '50%' }}>
          <LevelEmojis level={parseInt(levelEmojis, 10)} />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Emojis />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(LOGOS, levelLogos)}>
        <Stack sx={{ width: '50%' }}>
          <Logos />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <LevelLogos level={parseInt(levelLogos, 10)} />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        onClick={() => handleClick(PELICULAS, levelPeliculas)}
      >
        <Stack sx={{ width: '50%' }}>
          <LevelPeliculas level={parseInt(levelPeliculas, 10)} />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Peliculas />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        onClick={() => handleClick(JUGADORES, levelJugadores)}
      >
        <Stack sx={{ width: '50%' }}>
          <Jugadores />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <LevelJugadores level={parseInt(levelJugadores, 10)} />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(SOMBRAS, levelSombras)}>
        <Stack sx={{ width: '50%' }}>
          <LevelSombras level={parseInt(levelSombras, 10)} />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Sombras />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Levels
