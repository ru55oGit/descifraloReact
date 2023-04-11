import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import useStyles from './styles'
import { Acertijos, Emojis, Logos, Peliculas } from '../IconsCategories'

const Levels = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box className={classes.container}>
      <Stack className={classes.row} direction="row">
        <Acertijos color={theme.palette.primary.main} />
        <Emojis color={theme.palette.primary.main} />
      </Stack>
      <Stack className={classes.row} direction="row">
        <Peliculas color={theme.palette.primary.main} />
        <Logos color={theme.palette.primary.main} />
      </Stack>
    </Box>
  )
}

export default Levels
