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

  const handleClick = (category) => {
    gameDispatch({
      game: { category },
      type: Actions.UPDATE_LEVEL,
    })

    navigate('/niveles')
  }

  return (
    <Box className={classes.containerLevel}>
      <Stack direction="row" onClick={() => handleClick(ACERTIJOS)}>
        <Stack sx={{ width: '50%' }}>
          <Acertijos />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <LevelAdivinanzas level={1} />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(EMOJIS)}>
        <Stack sx={{ width: '50%' }}>
          <LevelEmojis level={1} />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Emojis />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(LOGOS)}>
        <Stack sx={{ width: '50%' }}>
          <Logos />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <LevelLogos level={1} />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(PELICULAS)}>
        <Stack sx={{ width: '50%' }}>
          <LevelPeliculas level={1} />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Peliculas />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(JUGADORES)}>
        <Stack sx={{ width: '50%' }}>
          <Jugadores />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <LevelJugadores level={1} />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(SOMBRAS)}>
        <Stack sx={{ width: '50%' }}>
          <LevelSombras level={1} />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Sombras />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Levels
