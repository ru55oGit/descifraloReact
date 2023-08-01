import PropTypes from 'prop-types'
import { Funkos1, Funkos2 } from '../../SVG/Funkos'

const LevelFunkos = ({ level }) => {
  switch (level) {
    case 1:
      return <Funkos1 />
    case 2:
      return <Funkos2 />
    default:
      return <Funkos1 />
  }
}

export default LevelFunkos

LevelFunkos.propTypes = {
  level: PropTypes.number.isRequired,
}
