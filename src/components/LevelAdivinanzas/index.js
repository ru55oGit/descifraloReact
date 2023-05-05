import PropTypes from 'prop-types'
import {
  Adivinanzas1,
  Adivinanzas2,
  Adivinanzas3,
  Adivinanzas4,
  Adivinanzas5,
  Adivinanzas6,
  Adivinanzas7,
  Adivinanzas8,
  Adivinanzas9,
  Adivinanzas10,
} from '../SVG/Adivinanzas'

const LevelAdivinanzas = ({ level }) => {
  switch (level) {
    case 1:
      return <Adivinanzas1 />
    case 2:
      return <Adivinanzas2 />
    case 3:
      return <Adivinanzas3 />
    case 4:
      return <Adivinanzas4 />
    case 5:
      return <Adivinanzas5 />
    case 6:
      return <Adivinanzas6 />
    case 7:
      return <Adivinanzas7 />
    case 8:
      return <Adivinanzas8 />
    case 9:
      return <Adivinanzas9 />
    case 10:
      return <Adivinanzas10 />
    default:
      return <Adivinanzas1 />
  }
}

export default LevelAdivinanzas

LevelAdivinanzas.propTypes = {
  level: PropTypes.number,
}

LevelAdivinanzas.defaultProps = {
  level: 1,
}
