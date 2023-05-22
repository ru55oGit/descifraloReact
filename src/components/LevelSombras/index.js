import PropTypes from 'prop-types'
import {
  Sombras1,
  Sombras2,
  Sombras3,
  Sombras4,
  Sombras5,
  Sombras6,
  Sombras7,
  Sombras8,
  Sombras9,
  Sombras10,
  Sombras11,
  Sombras12,
  Sombras13,
  Sombras14,
  Sombras15,
  Sombras16,
  Sombras17,
  Sombras18,
  Sombras19,
  Sombras20,
  Sombras21,
  Sombras22,
  Sombras23,
  Sombras24,
  Sombras25,
} from '../SVG/Sombras'

const LevelSombras = ({ level }) => {
  switch (level) {
    case 1:
      return <Sombras1 />
    case 2:
      return <Sombras2 />
    case 3:
      return <Sombras3 />
    case 4:
      return <Sombras4 />
    case 5:
      return <Sombras5 />
    case 6:
      return <Sombras6 />
    case 7:
      return <Sombras7 />
    case 8:
      return <Sombras8 />
    case 9:
      return <Sombras9 />
    case 10:
      return <Sombras10 />
    case 11:
      return <Sombras11 />
    case 12:
      return <Sombras12 />
    case 13:
      return <Sombras13 />
    case 14:
      return <Sombras14 />
    case 15:
      return <Sombras15 />
    case 16:
      return <Sombras16 />
    case 17:
      return <Sombras17 />
    case 18:
      return <Sombras18 />
    case 19:
      return <Sombras19 />
    case 20:
      return <Sombras20 />
    case 21:
      return <Sombras21 />
    case 22:
      return <Sombras22 />
    case 23:
      return <Sombras23 />
    case 24:
      return <Sombras24 />
    case 25:
      return <Sombras25 />
    default:
      return <Sombras1 />
  }
}

export default LevelSombras

LevelSombras.propTypes = {
  level: PropTypes.number.isRequired,
}
