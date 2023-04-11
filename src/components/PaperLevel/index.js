import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import useStyles from './styles'

const PaperLevel = (props) => {
  const { title, level, bgColor } = props
  const classes = useStyles()

  return (
    <Box className={classes.container} sx={{ backgroundColor: bgColor }}>
      {title !== '' ? (
        <Typography>{title}</Typography>
      ) : (
        <Avatar src={level.src} />
      )}
    </Box>
  )
}

export default PaperLevel

PaperLevel.propTypes = {
  bgColor: PropTypes.string,
  level: PropTypes.shape({
    src: PropTypes.string,
  }),
  title: PropTypes.string,
}

PaperLevel.defaultProps = {
  bgColor: '',
  level: {},
  title: '',
}
