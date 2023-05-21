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
  Emojis21,
  Emojis22,
  Emojis23,
  Emojis24,
  Emojis25,
  Emojis26,
  Emojis27,
  Emojis28,
  Emojis29,
  Emojis30,
  Emojis31,
  Emojis32,
  Emojis33,
  Emojis34,
  Emojis35,
  Emojis36,
  Emojis37,
  Emojis38,
  Emojis39,
  Emojis40,
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
    case 21:
      return <Emojis21 />
    case 22:
      return <Emojis22 />
    case 23:
      return <Emojis23 />
    case 24:
      return <Emojis24 />
    case 25:
      return <Emojis25 />
    case 26:
      return <Emojis26 />
    case 27:
      return <Emojis27 />
    case 28:
      return <Emojis28 />
    case 29:
      return <Emojis29 />
    case 30:
      return <Emojis30 />
    case 31:
      return <Emojis31 />
    case 32:
      return <Emojis32 />
    case 33:
      return <Emojis33 />
    case 34:
      return <Emojis34 />
    case 35:
      return <Emojis35 />
    case 36:
      return <Emojis36 />
    case 37:
      return <Emojis37 />
    case 38:
      return <Emojis38 />
    case 39:
      return <Emojis39 />
    case 40:
      return <Emojis40 />
    default:
      return <Emojis1 />
  }
}

export default LevelEmojis

LevelEmojis.propTypes = {
  level: PropTypes.number.isRequired,
}
