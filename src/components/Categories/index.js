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

const Levels = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [level, setLevel] = useState(1)
  const { gameDispatch } = useGameContext()

  const handleClick = (lev, cat) => {
    gameDispatch({
      game: { category: cat, level: lev },
      type: Actions.UPDATE_LEVEL,
    })

    navigate('/jugar')
  }

  return (
    <>
      <NavBar level={level} setLevel={setLevel} />
      <Box className={classes.containerLevel}>
        <Stack
          className={classes.row}
          direction="row"
          onClick={() => handleClick(level, ACERTIJOS)}
        >
          <Acertijos />
          <LevelAdivinanzas level={level} />
        </Stack>
        <Stack
          className={classes.row}
          direction="row"
          onClick={() => handleClick(level, EMOJIS)}
        >
          <LevelEmojis level={level} />
          <Emojis />
        </Stack>
        <Stack
          className={classes.row}
          direction="row"
          onClick={() => handleClick(level, LOGOS)}
        >
          <Logos />
          <LevelLogos level={level} />
        </Stack>
        <Stack
          className={classes.row}
          direction="row"
          onClick={() => handleClick(level, PELICULAS)}
        >
          <LevelPeliculas level={level} />
          <Peliculas />
        </Stack>
        <Stack
          className={classes.row}
          direction="row"
          onClick={() => handleClick(level, JUGADORES)}
        >
          <Jugadores />
          <LevelJugadores level={level} />
        </Stack>
        <Stack
          className={classes.row}
          direction="row"
          onClick={() => handleClick(level, SOMBRAS)}
        >
          <LevelSombras level={level} />
          <Sombras />
        </Stack>
      </Box>
    </>
  )
}

export default Levels
