/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
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

const NavBar = ({
  backArrow,
  fixed,
  openMenu,
  setOpenMenu,
  openDonate,
  setOpenDonate,
  level,
}) => {
  const theme = useTheme()
  const classes = useStyles()
  const navigate = useNavigate()
  const [lev, setLev] = useState()

  useEffect(() => {
    setLev(level)
  }, [])

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
    setOpenDonate(false)
  }

  const handleOpenDonate = () => {
    setOpenDonate(!openDonate)
    setOpenMenu(false)
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Stack
        className={classes.navBar}
        direction="row"
        sx={{ position: fixed ? 'fixed' : 'relative' }}
      >
        {!backArrow ? (
          <MenuIcon
            onClick={handleOpenMenu}
            sx={{ color: theme.palette.primary.main, fontSize: '2rem' }}
          />
        ) : (
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            sx={{ color: theme.palette.primary.main, fontSize: '2rem' }}
          />
        )}
        {level && (
          <Stack sx={{ textAlign: 'center' }}>
            <Typography color="primary.main" variant="body1">
              Nivel
            </Typography>
            <Typography
              color="primary.main"
              sx={{ lineHeight: 1 }}
              variant="hxxl"
            >
              {lev}
            </Typography>
          </Stack>
        )}

        <Stack onClick={handleOpenDonate}>
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
  backArrow: PropTypes.bool,
  fixed: PropTypes.bool,
  level: PropTypes.number,
  openDonate: PropTypes.bool,
  openMenu: PropTypes.bool,
  setOpenDonate: PropTypes.func,
  setOpenMenu: PropTypes.func,
}

NavBar.defaultProps = {
  backArrow: false,
  fixed: false,
  level: undefined,
  openDonate: false,
  openMenu: false,
  setOpenDonate: () => {},
  setOpenMenu: () => {},
}
