import PropTypes from 'prop-types'
import {
  Adivinanzas1,
  Adivinanzas2,
  Adivinanzas3,
  Adivinanzas4,
  Adivinanzas5,
  Adivinanzas6,
  Adivinanzas7,
  Adivinanzas8,
  Adivinanzas9,
  Adivinanzas10,
  Adivinanzas11,
  Adivinanzas12,
  Adivinanzas13,
  Adivinanzas14,
  Adivinanzas15,
  Adivinanzas16,
  Adivinanzas17,
  Adivinanzas18,
  Adivinanzas19,
  Adivinanzas20,
  Adivinanzas21,
  Adivinanzas22,
  Adivinanzas23,
  Adivinanzas24,
  Adivinanzas25,
  Adivinanzas26,
  Adivinanzas27,
  Adivinanzas28,
  Adivinanzas29,
  Adivinanzas30,
  Adivinanzas31,
  Adivinanzas32,
  Adivinanzas33,
  Adivinanzas34,
  Adivinanzas35,
  Adivinanzas36,
  Adivinanzas37,
  Adivinanzas38,
  Adivinanzas39,
  Adivinanzas40,
  Adivinanzas41,
  Adivinanzas42,
  Adivinanzas43,
  Adivinanzas44,
  Adivinanzas45,
  Adivinanzas46,
  Adivinanzas47,
  Adivinanzas48,
  Adivinanzas49,
  Adivinanzas50,
  Adivinanzas51,
  Adivinanzas52,
  Adivinanzas53,
  Adivinanzas54,
  Adivinanzas55,
} from '../SVG/Adivinanzas'

const LevelAdivinanzas = ({ level }) => {
  switch (level) {
    case 1:
      return <Adivinanzas1 />
    case 2:
      return <Adivinanzas2 />
    case 3:
      return <Adivinanzas3 />
    case 4:
      return <Adivinanzas4 />
    case 5:
      return <Adivinanzas5 />
    case 6:
      return <Adivinanzas6 />
    case 7:
      return <Adivinanzas7 />
    case 8:
      return <Adivinanzas8 />
    case 9:
      return <Adivinanzas9 />
    case 10:
      return <Adivinanzas10 />
    case 11:
      return <Adivinanzas11 />
    case 12:
      return <Adivinanzas12 />
    case 13:
      return <Adivinanzas13 />
    case 14:
      return <Adivinanzas14 />
    case 15:
      return <Adivinanzas15 />
    case 16:
      return <Adivinanzas16 />
    case 17:
      return <Adivinanzas17 />
    case 18:
      return <Adivinanzas18 />
    case 19:
      return <Adivinanzas19 />
    case 20:
      return <Adivinanzas20 />
    case 21:
      return <Adivinanzas21 />
    case 22:
      return <Adivinanzas22 />
    case 23:
      return <Adivinanzas23 />
    case 24:
      return <Adivinanzas24 />
    case 25:
      return <Adivinanzas25 />
    case 26:
      return <Adivinanzas26 />
    case 27:
      return <Adivinanzas27 />
    case 28:
      return <Adivinanzas28 />
    case 29:
      return <Adivinanzas29 />
    case 30:
      return <Adivinanzas30 />
    case 31:
      return <Adivinanzas31 />
    case 32:
      return <Adivinanzas32 />
    case 33:
      return <Adivinanzas33 />
    case 34:
      return <Adivinanzas34 />
    case 35:
      return <Adivinanzas35 />
    case 36:
      return <Adivinanzas36 />
    case 37:
      return <Adivinanzas37 />
    case 38:
      return <Adivinanzas38 />
    case 39:
      return <Adivinanzas39 />
    case 40:
      return <Adivinanzas40 />
    case 41:
      return <Adivinanzas41 />
    case 42:
      return <Adivinanzas42 />
    case 43:
      return <Adivinanzas43 />
    case 44:
      return <Adivinanzas44 />
    case 45:
      return <Adivinanzas45 />
    case 46:
      return <Adivinanzas46 />
    case 47:
      return <Adivinanzas47 />
    case 48:
      return <Adivinanzas48 />
    case 49:
      return <Adivinanzas49 />
    case 50:
      return <Adivinanzas50 />
    case 51:
      return <Adivinanzas51 />
    case 52:
      return <Adivinanzas52 />
    case 53:
      return <Adivinanzas53 />
    case 54:
      return <Adivinanzas54 />
    case 55:
      return <Adivinanzas55 />
    default:
      return <Adivinanzas1 />
  }
}

export default LevelAdivinanzas

LevelAdivinanzas.propTypes = {
  level: PropTypes.number,
}

LevelAdivinanzas.defaultProps = {
  level: 1,
}
