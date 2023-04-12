import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
// import { useTheme } from '@mui/material'
import useStyles from './styles'
import {
  Acertijos,
  Emojis,
  Logos,
  Peliculas,
  Jugadores,
} from '../IconsCategories'
import { Emojis1, Emojis2 } from '../SVG/Emojis'

const Levels = () => {
  const classes = useStyles()
  // const theme = useTheme()

  return (
    <Box className={classes.container}>
      <Stack className={classes.row} direction="row">
        <Acertijos />
        <Emojis1 />
      </Stack>
      <Stack className={classes.row} direction="row">
        <Emojis2 />
        <Emojis />
      </Stack>
      <Stack className={classes.row} direction="row">
        <Logos />
        <Emojis1 />
      </Stack>
      <Stack className={classes.row} direction="row">
        <Emojis1 />
        <Peliculas />
      </Stack>
      <Stack className={classes.row} direction="row">
        <Jugadores />
        <Emojis1 />
      </Stack>
    </Box>
  )
}

export default Levels
