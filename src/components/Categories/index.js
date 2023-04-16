import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import MenuIcon from '@mui/icons-material/Menu'
import PaidIcon from '@mui/icons-material/Paid'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'

import { useTheme } from '@mui/styles'
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
import useStyles from './styles'

const Levels = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <Box className={classes.containerLevel}>
      <Stack className={classes.navBar} direction="row">
        <MenuIcon
          sx={{ color: theme.palette.primary.main, fontSize: '2rem' }}
        />
        <Button className={classes.button} onClick={() => setOpen(!open)}>
          <Typography variant="h2">Nivel</Typography>
          <UnfoldMoreIcon
            sx={{
              color: open
                ? theme.palette.primary.main
                : theme.palette.white.main,
              fontSize: '1.4rem',
            }}
          />
        </Button>
        <Stack>
          <PaidIcon
            sx={{ color: theme.palette.primary.main, margin: 'auto' }}
          />
          <Typography color="primary.main" variant="body1">
            Colabora
          </Typography>
        </Stack>
      </Stack>
      <Dialog onClose={handleClose} open={open}>
        <Box sx={{ backgroundcolor: theme.backgrounds[2], border: 1, p: 1 }}>
          The content of the Dialog.
        </Box>
      </Dialog>
      <Stack className={classes.row} direction="row">
        <Acertijos />
        <LevelAdivinanzas level={1} />
      </Stack>
      <Stack className={classes.row} direction="row">
        <LevelEmojis level={1} />
        <Emojis />
      </Stack>
      <Stack className={classes.row} direction="row">
        <Logos />
        <LevelLogos level={1} />
      </Stack>
      <Stack className={classes.row} direction="row">
        <LevelPeliculas level={1} />
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
