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

const NavBar = ({ backArrow, fixed, openMenu, setOpenMenu, level }) => {
  const theme = useTheme()
  const classes = useStyles()
  const navigate = useNavigate()
  const [lev, setLev] = useState()

  useEffect(() => {
    setLev(level)
  }, [])

  return (
    <Box sx={{ position: 'relative' }}>
      <Stack
        className={classes.navBar}
        direction="row"
        sx={{ position: fixed ? 'fixed' : 'relative' }}
      >
        {!backArrow ? (
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
  backArrow: PropTypes.bool,
  fixed: PropTypes.bool,
  level: PropTypes.string,
  openMenu: PropTypes.bool,
  setOpenMenu: PropTypes.func,
}

NavBar.defaultProps = {
  backArrow: false,
  fixed: false,
  level: undefined,
  openMenu: false,
  setOpenMenu: () => {},
}
