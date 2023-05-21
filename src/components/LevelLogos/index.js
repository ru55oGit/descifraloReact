import PropTypes from 'prop-types'
import {
  Marcas1,
  Marcas2,
  Marcas3,
  Marcas4,
  Marcas5,
  Marcas6,
  Marcas7,
  Marcas8,
  Marcas9,
  Marcas10,
  Marcas11,
  Marcas12,
  Marcas13,
  Marcas14,
  Marcas15,
  Marcas16,
  Marcas17,
  Marcas18,
  Marcas19,
  Marcas20,
  Marcas21,
} from '../SVG/Logos'

const LevelLogos = ({ level }) => {
  switch (level) {
    case 1:
      return <Marcas1 />
    case 2:
      return <Marcas2 />
    case 3:
      return <Marcas3 />
    case 4:
      return <Marcas4 />
    case 5:
      return <Marcas5 />
    case 6:
      return <Marcas6 />
    case 7:
      return <Marcas7 />
    case 8:
      return <Marcas8 />
    case 9:
      return <Marcas9 />
    case 10:
      return <Marcas10 />
    case 11:
      return <Marcas11 />
    case 12:
      return <Marcas12 />
    case 13:
      return <Marcas13 />
    case 14:
      return <Marcas14 />
    case 15:
      return <Marcas15 />
    case 16:
      return <Marcas16 />
    case 17:
      return <Marcas17 />
    case 18:
      return <Marcas18 />
    case 19:
      return <Marcas19 />
    case 20:
      return <Marcas20 />
    case 21:
      return <Marcas21 />
    default:
      return <Marcas1 />
  }
}

export default LevelLogos

LevelLogos.propTypes = {
  level: PropTypes.number.isRequired,
}
