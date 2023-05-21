import PropTypes from 'prop-types'
import {
  Peliculas1,
  Peliculas2,
  Peliculas3,
  Peliculas4,
  Peliculas5,
  Peliculas6,
  Peliculas7,
  Peliculas8,
  Peliculas9,
  Peliculas10,
  Peliculas11,
  Peliculas12,
  Peliculas13,
  Peliculas14,
  Peliculas15,
  Peliculas16,
  Peliculas17,
  Peliculas18,
  Peliculas19,
  Peliculas20,
  Peliculas21,
  Peliculas22,
  Peliculas23,
  Peliculas24,
  Peliculas25,
} from '../SVG/Peliculas'

const LevelPeliculas = ({ level }) => {
  switch (level) {
    case 1:
      return <Peliculas1 />
    case 2:
      return <Peliculas2 />
    case 3:
      return <Peliculas3 />
    case 4:
      return <Peliculas4 />
    case 5:
      return <Peliculas5 />
    case 6:
      return <Peliculas6 />
    case 7:
      return <Peliculas7 />
    case 8:
      return <Peliculas8 />
    case 9:
      return <Peliculas9 />
    case 10:
      return <Peliculas10 />
    case 11:
      return <Peliculas11 />
    case 12:
      return <Peliculas12 />
    case 13:
      return <Peliculas13 />
    case 14:
      return <Peliculas14 />
    case 15:
      return <Peliculas15 />
    case 16:
      return <Peliculas16 />
    case 17:
      return <Peliculas17 />
    case 18:
      return <Peliculas18 />
    case 19:
      return <Peliculas19 />
    case 20:
      return <Peliculas20 />
    case 21:
      return <Peliculas21 />
    case 22:
      return <Peliculas22 />
    case 23:
      return <Peliculas23 />
    case 24:
      return <Peliculas24 />
    case 25:
      return <Peliculas25 />
    default:
      return <Peliculas1 />
  }
}

export default LevelPeliculas

LevelPeliculas.propTypes = {
  level: PropTypes.number.isRequired,
}
