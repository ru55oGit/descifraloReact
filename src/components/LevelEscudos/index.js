import PropTypes from 'prop-types'
import { Escudos1, Escudos2 } from '../SVG/Escudos'

const LevelEscudos = ({ level }) => {
  switch (level) {
    case 1:
      return <Escudos1 />
    case 2:
      return <Escudos2 />
    default:
      return <Escudos1 />
  }
}

export default LevelEscudos

LevelEscudos.propTypes = {
  level: PropTypes.number.isRequired,
}
