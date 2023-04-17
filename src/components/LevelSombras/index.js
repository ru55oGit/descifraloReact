import PropTypes from 'prop-types'
import { Sombras1, Sombras2 } from '../SVG/Sombras'

const LevelSombras = ({ level }) => {
  switch (level) {
    case 1:
      return <Sombras1 />
    case 2:
      return <Sombras2 />
    default:
      return <Sombras1 />
  }
}

export default LevelSombras

LevelSombras.propTypes = {
  level: PropTypes.number.isRequired,
}
