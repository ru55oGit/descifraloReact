import PropTypes from 'prop-types'
import {
  Funkos1,
  Funkos2,
  Funkos3,
  Funkos4,
  Funkos5,
  Funkos6,
  Funkos7,
  Funkos8,
  Funkos9,
  Funkos10,
  Funkos11,
  Funkos12,
  Funkos13,
  Funkos14,
  Funkos15,
  Funkos16,
  Funkos17,
  Funkos18,
  Funkos19,
  Funkos20,
  Funkos21,
  Funkos22,
  Funkos23,
  Funkos24,
  Funkos25,
  Funkos26,
  Funkos27,
  Funkos28,
  Funkos29,
  Funkos30,
  Funkos31,
  Funkos32,
  Funkos33,
  Funkos34,
  Funkos35,
  Funkos36,
  Funkos37,
  Funkos38,
  Funkos39,
  Funkos40,
  Funkos41,
  Funkos42,
  Funkos43,
  Funkos44,
  Funkos45,
  Funkos46,
  Funkos47,
  Funkos48,
  Funkos49,
  Funkos50,
} from '../../SVG/Funkos'

const LevelFunkos = ({ level }) => {
  switch (level) {
    case 1:
      return <Funkos1 />
    case 2:
      return <Funkos2 />
    case 3:
      return <Funkos3 />
    case 4:
      return <Funkos4 />
    case 5:
      return <Funkos5 />
    case 6:
      return <Funkos6 />
    case 7:
      return <Funkos7 />
    case 8:
      return <Funkos8 />
    case 9:
      return <Funkos9 />
    case 10:
      return <Funkos10 />
    case 11:
      return <Funkos11 />
    case 12:
      return <Funkos12 />
    case 13:
      return <Funkos13 />
    case 14:
      return <Funkos14 />
    case 15:
      return <Funkos15 />
    case 16:
      return <Funkos16 />
    case 17:
      return <Funkos17 />
    case 18:
      return <Funkos18 />
    case 19:
      return <Funkos19 />
    case 20:
      return <Funkos20 />
    case 21:
      return <Funkos21 />
    case 22:
      return <Funkos22 />
    case 23:
      return <Funkos23 />
    case 24:
      return <Funkos24 />
    case 25:
      return <Funkos25 />
    case 26:
      return <Funkos26 />
    case 27:
      return <Funkos27 />
    case 28:
      return <Funkos28 />
    case 29:
      return <Funkos29 />
    case 30:
      return <Funkos30 />
    case 31:
      return <Funkos31 />
    case 32:
      return <Funkos32 />
    case 33:
      return <Funkos33 />
    case 34:
      return <Funkos34 />
    case 35:
      return <Funkos35 />
    case 36:
      return <Funkos36 />
    case 37:
      return <Funkos37 />
    case 38:
      return <Funkos38 />
    case 39:
      return <Funkos39 />
    case 40:
      return <Funkos40 />
    case 41:
      return <Funkos41 />
    case 42:
      return <Funkos42 />
    case 43:
      return <Funkos43 />
    case 44:
      return <Funkos44 />
    case 45:
      return <Funkos45 />
    case 46:
      return <Funkos46 />
    case 47:
      return <Funkos47 />
    case 48:
      return <Funkos48 />
    case 49:
      return <Funkos49 />
    case 50:
      return <Funkos50 />
    default:
      return <Funkos50 />
  }
}

export default LevelFunkos

LevelFunkos.propTypes = {
  level: PropTypes.number,
}

LevelFunkos.defaultProps = {
  level: 1,
}
