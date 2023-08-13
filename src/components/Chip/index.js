import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded'
import { useTheme } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import useStyles from './styles'
import { getImage } from '../../utils'
import { useGameContext, Actions } from '../../store/game'

const Chip = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()
  const { gameDispatch } = useGameContext()

  const { level, category, title } = props

  const handleClick = (cat, lev) => {
    gameDispatch({
      game: { category: cat, level: lev },
      type: Actions.UPDATE_LEVEL,
    })

    navigate('/niveles')
  }

  return (
    <Box>
      <Box className={classes.chipContainer}>
        <Stack
          className={classes.imageContainer}
          onClick={() => handleClick(category, level)}
        >
          {getImage(category, level)}
        </Stack>

        <Stack className={classes.textContainer}>
          <PlayCircleOutlineRoundedIcon
            onClick={() => handleClick(category, level)}
            sx={{
              background: theme.palette.white.main,
              borderRadius: '50%',
              color: theme.palette.primary.main,
              cursor: 'pointer',
              fontSize: '3rem',
            }}
          />
          <Typography>Nivel: {level}</Typography>
          <Typography sx={{ textTransform: 'uppercase' }} variant="hxl">
            {title}
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default Chip

Chip.propTypes = {
  category: PropTypes.string,
  level: PropTypes.number,
  title: PropTypes.string,
}

Chip.defaultProps = {
  category: '',
  level: 1,
  title: '',
}
