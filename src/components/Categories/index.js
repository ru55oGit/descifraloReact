import { useState } from 'react'
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
import NavBar from '../NavBar'
import useStyles from './styles'
import { useGameContext, Actions } from '../../store'

import DataAcertijos from '../../data/adivinanzas.json'

const Levels = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [level, setLevel] = useState(1)
  const { gameDispatch } = useGameContext()

  const handleClick = (lev, cat, wor) => {
    gameDispatch({
      game: { category: cat, level: lev, word: wor },
      type: Actions.UPDATE_LEVEL,
    })

    navigate('/jugar')
  }

  return (
    <>
      <NavBar level={level} setLevel={setLevel} />
      <Box className={classes.containerLevel}>
        <Stack
          direction="row"
          onClick={() =>
            handleClick(
              level,
              ACERTIJOS,
              DataAcertijos.listado[level].respuesta
            )
          }
        >
          <Stack sx={{ width: '50%' }}>
            <Acertijos />
          </Stack>
          <Stack sx={{ width: '50%' }}>
            <LevelAdivinanzas level={level} />
          </Stack>
        </Stack>
        <Stack direction="row">
          <Stack
            onClick={() => handleClick(level, EMOJIS)}
            sx={{ width: '50%' }}
          >
            <LevelEmojis level={level} />
          </Stack>
          <Stack
            onClick={() => handleClick(level, EMOJIS)}
            sx={{ width: '50%' }}
          >
            <Emojis />
          </Stack>
        </Stack>
        <Stack direction="row">
          <Stack
            onClick={() => handleClick(level, LOGOS)}
            sx={{ width: '50%' }}
          >
            <Logos />
          </Stack>
          <Stack
            onClick={() => handleClick(level, LOGOS)}
            sx={{ width: '50%' }}
          >
            <LevelLogos level={level} />
          </Stack>
        </Stack>
        <Stack direction="row">
          <Stack
            onClick={() => handleClick(level, PELICULAS)}
            sx={{ width: '50%' }}
          >
            <LevelPeliculas level={level} />
          </Stack>
          <Stack
            onClick={() => handleClick(level, PELICULAS)}
            sx={{ width: '50%' }}
          >
            <Peliculas />
          </Stack>
        </Stack>
        <Stack direction="row">
          <Stack
            onClick={() => handleClick(level, JUGADORES)}
            sx={{ width: '50%' }}
          >
            <Jugadores />
          </Stack>
          <Stack
            onClick={() => handleClick(level, JUGADORES)}
            sx={{ width: '50%' }}
          >
            <LevelJugadores level={level} />
          </Stack>
        </Stack>
        <Stack direction="row">
          <Stack
            onClick={() => handleClick(level, SOMBRAS)}
            sx={{ width: '50%' }}
          >
            <LevelSombras level={level} />
          </Stack>
          <Stack
            onClick={() => handleClick(level, SOMBRAS)}
            sx={{ width: '50%' }}
          >
            <Sombras />
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default Levels
