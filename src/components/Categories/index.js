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
  const [levelAcertijos, setLevelAcertijos] = useState(1)
  const [levelEmojis, setLevelEmojis] = useState(1)
  const [levelLogos, setLevelLogos] = useState(1)
  const [levelPeliculas, setLevelPeliculas] = useState(1)
  const [levelJugadores, setLevelJugadores] = useState(1)
  const [levelSombras, setLevelSombras] = useState(1)

  useEffect(() => {
    setLevelAcertijos(localStorage?.getItem(ACERTIJOS))
    setLevelEmojis(localStorage?.getItem(EMOJIS))
    setLevelLogos(localStorage?.getItem(LOGOS))
    setLevelPeliculas(localStorage?.getItem(PELICULAS))
    setLevelJugadores(localStorage?.getItem(JUGADORES))
    setLevelSombras(localStorage?.getItem(SOMBRAS))
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
          <LevelAdivinanzas level={levelAcertijos} />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(EMOJIS, levelEmojis)}>
        <Stack sx={{ width: '50%' }}>
          <LevelEmojis level={levelEmojis} />
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
          <LevelLogos level={levelLogos} />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        onClick={() => handleClick(PELICULAS, levelPeliculas)}
      >
        <Stack sx={{ width: '50%' }}>
          <LevelPeliculas level={levelPeliculas} />
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
          <LevelJugadores level={levelJugadores} />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(SOMBRAS, levelSombras)}>
        <Stack sx={{ width: '50%' }}>
          <LevelSombras level={levelSombras} />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Sombras />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Levels
