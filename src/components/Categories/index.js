import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import useStyles from './styles'
import {
  Acertijos,
  Emojis,
  Logos,
  Peliculas,
  Jugadores,
} from '../IconsCategories'
import LevelEmojis from '../LevelEmojis'
import LevelJugadores from '../LevelJugadores'

const Levels = () => {
  const classes = useStyles()

  return (
    <Box className={classes.containerLevel}>
      <Stack className={classes.row} direction="row">
        <Acertijos />
        <LevelEmojis level={1} />
      </Stack>
      <Stack className={classes.row} direction="row">
        <LevelEmojis level={2} />
        <Emojis />
      </Stack>
      <Stack className={classes.row} direction="row">
        <Logos />
        <LevelEmojis level={1} />
      </Stack>
      <Stack className={classes.row} direction="row">
        <LevelEmojis level={2} />
        <Peliculas />
      </Stack>
      <Stack className={classes.row} direction="row">
        <Jugadores />
        <LevelJugadores level={1} />
      </Stack>
    </Box>
  )
}

export default Levels
