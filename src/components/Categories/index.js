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

import DataAcertijos from '../../data/adivinanzas.json'

const Levels = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { gameDispatch } = useGameContext()

  const handleClick = (lev, cat, wor) => {
    gameDispatch({
      game: { category: cat, level: lev, word: wor },
      type: Actions.UPDATE_LEVEL,
    })

    navigate('/jugar')
  }

  return (
    <Box className={classes.containerLevel}>
      <Stack
        direction="row"
        onClick={() =>
          handleClick(1, ACERTIJOS, DataAcertijos.listado[1].respuesta)
        }
      >
        <Stack sx={{ width: '50%' }}>
          <Acertijos />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <LevelAdivinanzas level={1} />
        </Stack>
      </Stack>
      <Stack direction="row">
        <Stack onClick={() => handleClick(1, EMOJIS)} sx={{ width: '50%' }}>
          <LevelEmojis level={1} />
        </Stack>
        <Stack onClick={() => handleClick(1, EMOJIS)} sx={{ width: '50%' }}>
          <Emojis />
        </Stack>
      </Stack>
      <Stack direction="row">
        <Stack onClick={() => handleClick(1, LOGOS)} sx={{ width: '50%' }}>
          <Logos />
        </Stack>
        <Stack onClick={() => handleClick(1, LOGOS)} sx={{ width: '50%' }}>
          <LevelLogos level={1} />
        </Stack>
      </Stack>
      <Stack direction="row">
        <Stack onClick={() => handleClick(1, PELICULAS)} sx={{ width: '50%' }}>
          <LevelPeliculas level={1} />
        </Stack>
        <Stack onClick={() => handleClick(1, PELICULAS)} sx={{ width: '50%' }}>
          <Peliculas />
        </Stack>
      </Stack>
      <Stack direction="row">
        <Stack onClick={() => handleClick(1, JUGADORES)} sx={{ width: '50%' }}>
          <Jugadores />
        </Stack>
        <Stack onClick={() => handleClick(1, JUGADORES)} sx={{ width: '50%' }}>
          <LevelJugadores level={1} />
        </Stack>
      </Stack>
      <Stack direction="row">
        <Stack onClick={() => handleClick(1, SOMBRAS)} sx={{ width: '50%' }}>
          <LevelSombras level={1} />
        </Stack>
        <Stack onClick={() => handleClick(1, SOMBRAS)} sx={{ width: '50%' }}>
          <Sombras />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Levels
