import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import PaidIcon from '@mui/icons-material/Paid'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/styles'
import LevelList from '../LevelList'
import useStyles from './styles'

const NavBar = ({ level, setLevel }) => {
  const theme = useTheme()
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <>
      <Stack className={classes.navBar} direction="row">
        <MenuIcon
          sx={{ color: theme.palette.primary.main, fontSize: '2rem' }}
        />
        <Button className={classes.button} onClick={() => setOpen(!open)}>
          <Typography variant="h2">Nivel {level}</Typography>{' '}
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
            Doná
          </Typography>
        </Stack>
      </Stack>
      <Dialog onClose={handleClose} open={open}>
        <LevelList cant={200} setLevel={setLevel} setOpen={setOpen} />
      </Dialog>
    </>
  )
}

export default NavBar

NavBar.propTypes = {
  level: PropTypes.number.isRequired,
  setLevel: PropTypes.func,
}

NavBar.defaultProps = {
  setLevel: () => {},
}
