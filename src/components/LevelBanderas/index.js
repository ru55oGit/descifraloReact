import PropTypes from 'prop-types'
import { Banderas1, Banderas2 } from '../SVG/Banderas'

const LevelBanderas = ({ level }) => {
  switch (level) {
    case 1:
      return <Banderas1 />
    case 2:
      return <Banderas2 />
    default:
      return <Banderas1 />
  }
}

export default LevelBanderas

LevelBanderas.propTypes = {
  level: PropTypes.number.isRequired,
}
