/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import { useGameContext } from 'store/game'
import { useLanguageContext } from 'store/language'
import { ALEATORIO } from 'constants/const'
import i18n from 'constants/i18n.json'
import { CATEGORIES, PLAY, LEVELS, HOME } from 'constants/routes'
import useStyles from './styles'

const NavBar = (props) => {
  const { backArrow, fixed, openMenu, setOpenMenu, setOpenDonate, level } =
    props
  const theme = useTheme()
  const classes = useStyles()
  const navigate = useNavigate()
  const { gameState } = useGameContext()
  const { languageState } = useLanguageContext()

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
    setOpenDonate(false)
  }

  const handleBack = () => {
    if (
      gameState?.game?.category === ALEATORIO ||
      window.location.pathname === LEVELS
    ) {
      navigate(CATEGORIES)
    } else if (window.location.pathname === PLAY) {
      navigate(LEVELS)
    } else {
      navigate(-1)
    }
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
            sx={{
              color: theme.palette.primary.main,
              cursor: 'pointer',
              fontSize: '2rem',
            }}
          />
        ) : (
          <ArrowBackIcon
            onClick={handleBack}
            sx={{
              color: theme.palette.primary.main,
              cursor: 'pointer',
              fontSize: '2rem',
            }}
          />
        )}
        <Typography
          className="lobster"
          color="primary.main"
          onClick={() => navigate(HOME)}
          sx={{
            cursor: 'pointer',
            left: '50%',
            position: 'absolute',
            transform: 'translateX(-50%)',
          }}
          variant="hxxl"
        >
          Imaginalo
        </Typography>
        {level && gameState?.game?.category !== ALEATORIO && (
          <Stack sx={{ textAlign: 'center' }}>
            <Typography color="primary.main" variant="body1">
              {i18n.texts[languageState?.language].level}
            </Typography>
            <Typography
              color="primary.main"
              sx={{ lineHeight: 1 }}
              variant="hxxl"
            >
              {level}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Box>
  )
}

export default NavBar

NavBar.propTypes = {
  backArrow: PropTypes.bool,
  fixed: PropTypes.bool,
  level: PropTypes.number,
  openMenu: PropTypes.bool,
  setOpenDonate: PropTypes.func,
  setOpenMenu: PropTypes.func,
}

NavBar.defaultProps = {
  backArrow: false,
  fixed: false,
  level: null,
  openMenu: false,
  setOpenDonate: () => {},
  setOpenMenu: () => {},
}
