import PropTypes from 'prop-types'
import { Emojis1, Emojis2 } from '../SVG/Emojis'

const LevelEmojis = ({ level }) => {
  switch (level) {
    case 1:
      return <Emojis1 />
    case 2:
      return <Emojis2 />
    default:
      return <Emojis1 />
  }
}

export default LevelEmojis

LevelEmojis.propTypes = {
  level: PropTypes.number.isRequired,
}
