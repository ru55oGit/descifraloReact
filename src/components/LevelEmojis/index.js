import PropTypes from 'prop-types'
import {
  Emojis1,
  Emojis2,
  Emojis3,
  Emojis4,
  Emojis5,
  Emojis6,
  Emojis7,
  Emojis8,
  Emojis9,
  Emojis10,
  Emojis11,
  Emojis12,
  Emojis13,
  Emojis14,
  Emojis15,
  Emojis16,
  Emojis17,
  Emojis18,
  Emojis19,
  Emojis20,
} from '../SVG/Emojis'

const LevelEmojis = ({ level }) => {
  switch (level) {
    case 1:
      return <Emojis1 />
    case 2:
      return <Emojis2 />
    case 3:
      return <Emojis3 />
    case 4:
      return <Emojis4 />
    case 5:
      return <Emojis5 />
    case 6:
      return <Emojis6 />
    case 7:
      return <Emojis7 />
    case 8:
      return <Emojis8 />
    case 9:
      return <Emojis9 />
    case 10:
      return <Emojis10 />
    case 11:
      return <Emojis11 />
    case 12:
      return <Emojis12 />
    case 13:
      return <Emojis13 />
    case 14:
      return <Emojis14 />
    case 15:
      return <Emojis15 />
    case 16:
      return <Emojis16 />
    case 17:
      return <Emojis17 />
    case 18:
      return <Emojis18 />
    case 19:
      return <Emojis19 />
    case 20:
      return <Emojis20 />
    default:
      return <Emojis1 />
  }
}

export default LevelEmojis

LevelEmojis.propTypes = {
  level: PropTypes.number.isRequired,
}
