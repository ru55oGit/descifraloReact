import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import PaidIcon from '@mui/icons-material/Paid'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/styles'

import useStyles from './styles'

const NavBar = ({ isGame, openMenu, setOpenMenu }) => {
  const theme = useTheme()
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <Box sx={{ position: 'relative' }}>
      <Stack
        className={classes.navBar}
        direction="row"
        sx={{ position: isGame ? 'relative' : 'fixed' }}
      >
        {!isGame ? (
          <MenuIcon
            onClick={() => setOpenMenu(!openMenu)}
            sx={{ color: theme.palette.primary.main, fontSize: '2rem' }}
          />
        ) : (
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            sx={{ color: theme.palette.primary.main, fontSize: '2rem' }}
          />
        )}

        <Stack>
          <PaidIcon
            sx={{ color: theme.palette.primary.main, margin: 'auto' }}
          />
          <Typography color="primary.main" variant="body1">
            Colabore
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default NavBar

NavBar.propTypes = {
  isGame: PropTypes.bool,
  openMenu: PropTypes.bool,
  setOpenMenu: PropTypes.func,
}

NavBar.defaultProps = {
  isGame: false,
  openMenu: false,
  setOpenMenu: () => {},
}
