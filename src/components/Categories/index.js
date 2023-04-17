import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import {
  Acertijos,
  Emojis,
  Logos,
  Peliculas,
  Jugadores,
} from '../IconsCategories'
import LevelEmojis from '../LevelEmojis'
import LevelJugadores from '../LevelJugadores'
import LevelAdivinanzas from '../LevelAdivinanzas'
import LevelLogos from '../LevelLogos'
import LevelPeliculas from '../LevelPeliculas'
import NavBar from '../NavBar'
import useStyles from './styles'

const Levels = () => {
  const classes = useStyles()
  const [level, setLevel] = useState(1)

  return (
    <Box className={classes.containerLevel}>
      <NavBar level={level} setLevel={setLevel} />
      <Stack className={classes.row} direction="row">
        <Acertijos />
        <LevelAdivinanzas level={level} />
      </Stack>
      <Stack className={classes.row} direction="row">
        <LevelEmojis level={level} />
        <Emojis />
      </Stack>
      <Stack className={classes.row} direction="row">
        <Logos />
        <LevelLogos level={level} />
      </Stack>
      <Stack className={classes.row} direction="row">
        <LevelPeliculas level={level} />
        <Peliculas />
      </Stack>
      <Stack className={classes.row} direction="row">
        <Jugadores />
        <LevelJugadores level={level} />
      </Stack>
    </Box>
  )
}

export default Levels
