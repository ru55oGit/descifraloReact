import PropTypes from 'prop-types'
import {
  Marcas1,
  Marcas2,
  Marcas3,
  Marcas4,
  Marcas5,
  Marcas6,
  Marcas7,
  Marcas8,
  Marcas9,
  Marcas10,
  Marcas11,
  Marcas12,
  Marcas13,
  Marcas14,
  Marcas15,
  Marcas16,
  Marcas17,
  Marcas18,
  Marcas19,
  Marcas20,
  Marcas21,
  Marcas22,
  Marcas23,
  Marcas24,
  Marcas25,
  Marcas26,
  Marcas27,
  Marcas28,
  Marcas29,
  Marcas30,
  Marcas31,
  Marcas32,
  Marcas33,
  Marcas34,
  Marcas35,
  Marcas36,
  Marcas37,
  Marcas38,
  Marcas39,
  Marcas40,
  Marcas41,
  Marcas42,
  Marcas43,
  Marcas44,
  Marcas45,
  Marcas46,
  Marcas47,
  Marcas48,
  Marcas49,
  Marcas50,
} from '../SVG/Logos'

const LevelLogos = ({ level }) => {
  switch (level) {
    case 1:
      return <Marcas1 />
    case 2:
      return <Marcas2 />
    case 3:
      return <Marcas3 />
    case 4:
      return <Marcas4 />
    case 5:
      return <Marcas5 />
    case 6:
      return <Marcas6 />
    case 7:
      return <Marcas7 />
    case 8:
      return <Marcas8 />
    case 9:
      return <Marcas9 />
    case 10:
      return <Marcas10 />
    case 11:
      return <Marcas11 />
    case 12:
      return <Marcas12 />
    case 13:
      return <Marcas13 />
    case 14:
      return <Marcas14 />
    case 15:
      return <Marcas15 />
    case 16:
      return <Marcas16 />
    case 17:
      return <Marcas17 />
    case 18:
      return <Marcas18 />
    case 19:
      return <Marcas19 />
    case 20:
      return <Marcas20 />
    case 21:
      return <Marcas21 />
    case 22:
      return <Marcas22 />
    case 23:
      return <Marcas23 />
    case 24:
      return <Marcas24 />
    case 25:
      return <Marcas25 />
    case 26:
      return <Marcas26 />
    case 27:
      return <Marcas27 />
    case 28:
      return <Marcas28 />
    case 29:
      return <Marcas29 />
    case 30:
      return <Marcas30 />
    case 31:
      return <Marcas31 />
    case 32:
      return <Marcas32 />
    case 33:
      return <Marcas33 />
    case 34:
      return <Marcas34 />
    case 35:
      return <Marcas35 />
    case 36:
      return <Marcas36 />
    case 37:
      return <Marcas37 />
    case 38:
      return <Marcas38 />
    case 39:
      return <Marcas39 />
    case 40:
      return <Marcas40 />
    case 41:
      return <Marcas41 />
    case 42:
      return <Marcas42 />
    case 43:
      return <Marcas43 />
    case 44:
      return <Marcas44 />
    case 45:
      return <Marcas45 />
    case 46:
      return <Marcas46 />
    case 47:
      return <Marcas47 />
    case 48:
      return <Marcas48 />
    case 49:
      return <Marcas49 />
    case 50:
      return <Marcas50 />
    default:
      return <Marcas1 />
  }
}

export default LevelLogos

LevelLogos.propTypes = {
  level: PropTypes.number.isRequired,
}
