import PropTypes from 'prop-types'
import { Jugadores1, Jugadores2 } from '../SVG/Jugadores'

const LevelJugadores = ({ level }) => {
  switch (level) {
    case 1:
      return <Jugadores1 />
    case 2:
      return <Jugadores2 />
    default:
      return <Jugadores1 />
  }
}

export default LevelJugadores

LevelJugadores.propTypes = {
  level: PropTypes.number.isRequired,
}
