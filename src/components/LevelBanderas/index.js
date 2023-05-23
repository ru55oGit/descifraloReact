import PropTypes from 'prop-types'
import {
  Banderas1,
  Banderas2,
  Banderas3,
  Banderas4,
  Banderas5,
  Banderas6,
  Banderas7,
  Banderas8,
  Banderas9,
  Banderas10,
  Banderas11,
  Banderas12,
  Banderas13,
  Banderas14,
  Banderas15,
  Banderas16,
  Banderas17,
  Banderas18,
  Banderas19,
  Banderas20,
  Banderas21,
  Banderas22,
  Banderas23,
  Banderas24,
  Banderas25,
} from '../SVG/Banderas'

const LevelBanderas = ({ level }) => {
  switch (level) {
    case 1:
      return <Banderas1 />
    case 2:
      return <Banderas2 />
    case 3:
      return <Banderas3 />
    case 4:
      return <Banderas4 />
    case 5:
      return <Banderas5 />
    case 6:
      return <Banderas6 />
    case 7:
      return <Banderas7 />
    case 8:
      return <Banderas8 />
    case 9:
      return <Banderas9 />
    case 10:
      return <Banderas10 />
    case 11:
      return <Banderas11 />
    case 12:
      return <Banderas12 />
    case 13:
      return <Banderas13 />
    case 14:
      return <Banderas14 />
    case 15:
      return <Banderas15 />
    case 16:
      return <Banderas16 />
    case 17:
      return <Banderas17 />
    case 18:
      return <Banderas18 />
    case 19:
      return <Banderas19 />
    case 20:
      return <Banderas20 />
    case 21:
      return <Banderas21 />
    case 22:
      return <Banderas22 />
    case 23:
      return <Banderas23 />
    case 24:
      return <Banderas24 />
    case 25:
      return <Banderas25 />
    default:
      return <Banderas1 />
  }
}

export default LevelBanderas

LevelBanderas.propTypes = {
  level: PropTypes.number.isRequired,
}
