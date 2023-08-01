import PropTypes from 'prop-types'
import {
  Jugadores1,
  Jugadores2,
  Jugadores3,
  Jugadores4,
  Jugadores5,
  Jugadores6,
  Jugadores7,
  Jugadores8,
  Jugadores9,
  Jugadores10,
  Jugadores11,
  Jugadores12,
} from '../../SVG/Jugadores'

const LevelJugadores = ({ level }) => {
  switch (level) {
    case 1:
      return <Jugadores1 />
    case 2:
      return <Jugadores2 />
    case 3:
      return <Jugadores3 />
    case 4:
      return <Jugadores4 />
    case 5:
      return <Jugadores5 />
    case 6:
      return <Jugadores6 />
    case 7:
      return <Jugadores7 />
    case 8:
      return <Jugadores8 />
    case 9:
      return <Jugadores9 />
    case 10:
      return <Jugadores10 />
    case 11:
      return <Jugadores11 />
    case 12:
      return <Jugadores12 />
    default:
      return <Jugadores1 />
  }
}

export default LevelJugadores

LevelJugadores.propTypes = {
  level: PropTypes.number.isRequired,
}
