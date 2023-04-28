import PropTypes from 'prop-types'
import { Adivinanzas1, Adivinanzas2 } from '../SVG/Adivinanzas'

const LevelAdivinanzas = ({ level }) => {
  switch (level) {
    case 1:
      return <Adivinanzas1 />
    case 2:
      return <Adivinanzas2 />
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
