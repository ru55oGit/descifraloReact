import PropTypes from 'prop-types'
import { Marcas1, Marcas2 } from '../SVG/Logos'

const LevelLogos = ({ level }) => {
  switch (level) {
    case 1:
      return <Marcas1 />
    case 2:
      return <Marcas2 />
    default:
      return <Marcas1 />
  }
}

export default LevelLogos

LevelLogos.propTypes = {
  level: PropTypes.number.isRequired,
}
