import PropTypes from 'prop-types'
import { Peliculas1, Peliculas2 } from '../SVG/Peliculas'

const LevelPeliculas = ({ level }) => {
  switch (level) {
    case 1:
      return <Peliculas1 />
    case 2:
      return <Peliculas2 />
    default:
      return <Peliculas1 />
  }
}

export default LevelPeliculas

LevelPeliculas.propTypes = {
  level: PropTypes.number.isRequired,
}
