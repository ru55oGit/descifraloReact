import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded'
import { useTheme } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import useStyles from './styles'
import { getImage, isDevice } from '../../utils'
import { useGameContext, Actions } from '../../store/game'
import { ALEATORIO } from '../../constants/const'
import { useLanguageContext } from '../../store/language'
import { LEVELS, PLAY } from '../../constants/routes'
import i18n from '../../constants/i18n.json'

const Chip = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()
  const { gameDispatch } = useGameContext()
  const { languageState } = useLanguageContext()
  const { level, category, title, isRandom } = props

  const handleClick = (cat, lev) => {
    const payload = !isRandom
      ? { category: cat, level: lev }
      : { category: ALEATORIO, level: null }

    gameDispatch({
      game: payload,
      type: Actions.UPDATE_LEVEL,
    })

    navigate(!isRandom ? LEVELS : PLAY)
  }

  return (
    <Box>
      {isDevice ? (
        <Button
          className={classes.chipContainer}
          onTouchStart={() => handleClick(category, level)}
        >
          <Stack className={classes.imageContainer}>
            {getImage(category, level)}
          </Stack>

          <Stack className={classes.textContainer}>
            <PlayCircleOutlineRoundedIcon
              sx={{
                background: theme.palette.white.main,
                borderRadius: '50%',
                color: theme.palette.primary.main,
                cursor: 'pointer',
                fontSize: '3rem',
              }}
            />
            {isRandom ? (
              <Typography>
                {i18n.texts[languageState?.language].allCategories}
              </Typography>
            ) : (
              <Typography>
                {i18n.texts[languageState?.language].level}: {level}
              </Typography>
            )}
            <Typography sx={{ textTransform: 'uppercase' }} variant="hxl">
              {title}
            </Typography>
          </Stack>
        </Button>
      ) : (
        <Button
          className={classes.chipContainer}
          onClick={() => handleClick(category, level)}
        >
          <Stack className={classes.imageContainer}>
            {getImage(category, level)}
          </Stack>

          <Stack className={classes.textContainer}>
            <PlayCircleOutlineRoundedIcon
              sx={{
                background: theme.palette.white.main,
                borderRadius: '50%',
                color: theme.palette.primary.main,
                cursor: 'pointer',
                fontSize: '3rem',
              }}
            />
            {isRandom ? (
              <Typography>
                {i18n.texts[languageState?.language].allCategories}
              </Typography>
            ) : (
              <Typography>
                {i18n.texts[languageState?.language].level}: {level}
              </Typography>
            )}
            <Typography sx={{ textTransform: 'uppercase' }} variant="hxl">
              {title}
            </Typography>
          </Stack>
        </Button>
      )}
    </Box>
  )
}

export default Chip

Chip.propTypes = {
  category: PropTypes.string.isRequired,
  isRandom: PropTypes.bool,
  level: PropTypes.number,
  title: PropTypes.string.isRequired,
}

Chip.defaultProps = {
  isRandom: false,
  level: '',
}
