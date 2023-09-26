import PropTypes from 'prop-types'
import {
  Emojis1,
  Emojis2,
  Emojis3,
  Emojis4,
  Emojis5,
  Emojis6,
  Emojis7,
  Emojis8,
  Emojis9,
  Emojis10,
  Emojis11,
  Emojis12,
  Emojis13,
  Emojis14,
  Emojis15,
  Emojis16,
  Emojis17,
  Emojis18,
  Emojis19,
  Emojis20,
  Emojis21,
  Emojis22,
  Emojis23,
  Emojis24,
  Emojis25,
  Emojis26,
  Emojis27,
  Emojis28,
  Emojis29,
  Emojis30,
  Emojis31,
  Emojis32,
  Emojis33,
  Emojis34,
  Emojis35,
  Emojis36,
  Emojis37,
  Emojis38,
  Emojis39,
  Emojis40,
  Emojis41,
  Emojis42,
  Emojis43,
  Emojis44,
  Emojis45,
  Emojis46,
  Emojis47,
  Emojis48,
  Emojis49,
  Emojis50,
  Emojis51,
  Emojis52,
  Emojis53,
  Emojis54,
  Emojis55,
  Emojis56,
  Emojis57,
  Emojis58,
  Emojis59,
  Emojis60,
  Emojis61,
  Emojis62,
  Emojis63,
  Emojis64,
  Emojis65,
  Emojis66,
  Emojis67,
  Emojis68,
  Emojis69,
  Emojis70,
  Emojis71,
  Emojis72,
  Emojis73,
  Emojis74,
  Emojis75,
  Emojis76,
  Emojis77,
  Emojis78,
  Emojis79,
  Emojis80,
  Emojis81,
  Emojis82,
  Emojis83,
  Emojis84,
  Emojis85,
  Emojis86,
  Emojis87,
  Emojis88,
  Emojis89,
  Emojis90,
  Emojis91,
  Emojis92,
  Emojis93,
  Emojis94,
  Emojis95,
  Emojis96,
  Emojis97,
  Emojis98,
  Emojis99,
  Emojis100,
  Emojis101,
  Emojis102,
  Emojis103,
  Emojis104,
  Emojis105,
  Emojis106,
  Emojis107,
  Emojis108,
  Emojis109,
  Emojis110,
  Emojis111,
  Emojis112,
  Emojis113,
  Emojis114,
  Emojis115,
  Emojis116,
  Emojis117,
  Emojis118,
  Emojis119,
  Emojis120,
  Emojis121,
  Emojis122,
  Emojis123,
  Emojis124,
  Emojis125,
  Emojis126,
  Emojis127,
  Emojis128,
  Emojis129,
} from '../../SVG/Emojis'

const LevelEmojis = ({ level }) => {
  switch (level) {
    case 1:
      return <Emojis1 />
    case 2:
      return <Emojis2 />
    case 3:
      return <Emojis3 />
    case 4:
      return <Emojis4 />
    case 5:
      return <Emojis5 />
    case 6:
      return <Emojis6 />
    case 7:
      return <Emojis7 />
    case 8:
      return <Emojis8 />
    case 9:
      return <Emojis9 />
    case 10:
      return <Emojis10 />
    case 11:
      return <Emojis11 />
    case 12:
      return <Emojis12 />
    case 13:
      return <Emojis13 />
    case 14:
      return <Emojis14 />
    case 15:
      return <Emojis15 />
    case 16:
      return <Emojis16 />
    case 17:
      return <Emojis17 />
    case 18:
      return <Emojis18 />
    case 19:
      return <Emojis19 />
    case 20:
      return <Emojis20 />
    case 21:
      return <Emojis21 />
    case 22:
      return <Emojis22 />
    case 23:
      return <Emojis23 />
    case 24:
      return <Emojis24 />
    case 25:
      return <Emojis25 />
    case 26:
      return <Emojis26 />
    case 27:
      return <Emojis27 />
    case 28:
      return <Emojis28 />
    case 29:
      return <Emojis29 />
    case 30:
      return <Emojis30 />
    case 31:
      return <Emojis31 />
    case 32:
      return <Emojis32 />
    case 33:
      return <Emojis33 />
    case 34:
      return <Emojis34 />
    case 35:
      return <Emojis35 />
    case 36:
      return <Emojis36 />
    case 37:
      return <Emojis37 />
    case 38:
      return <Emojis38 />
    case 39:
      return <Emojis39 />
    case 40:
      return <Emojis40 />
    case 41:
      return <Emojis41 />
    case 42:
      return <Emojis42 />
    case 43:
      return <Emojis43 />
    case 44:
      return <Emojis44 />
    case 45:
      return <Emojis45 />
    case 46:
      return <Emojis46 />
    case 47:
      return <Emojis47 />
    case 48:
      return <Emojis48 />
    case 49:
      return <Emojis49 />
    case 50:
      return <Emojis50 />
    case 51:
      return <Emojis51 />
    case 52:
      return <Emojis52 />
    case 53:
      return <Emojis53 />
    case 54:
      return <Emojis54 />
    case 55:
      return <Emojis55 />
    case 56:
      return <Emojis56 />
    case 57:
      return <Emojis57 />
    case 58:
      return <Emojis58 />
    case 59:
      return <Emojis59 />
    case 60:
      return <Emojis60 />
    case 61:
      return <Emojis61 />
    case 62:
      return <Emojis62 />
    case 63:
      return <Emojis63 />
    case 64:
      return <Emojis64 />
    case 65:
      return <Emojis65 />
    case 66:
      return <Emojis66 />
    case 67:
      return <Emojis67 />
    case 68:
      return <Emojis68 />
    case 69:
      return <Emojis69 />
    case 70:
      return <Emojis70 />
    case 71:
      return <Emojis71 />
    case 72:
      return <Emojis72 />
    case 73:
      return <Emojis73 />
    case 74:
      return <Emojis74 />
    case 75:
      return <Emojis75 />
    case 76:
      return <Emojis76 />
    case 77:
      return <Emojis77 />
    case 78:
      return <Emojis78 />
    case 79:
      return <Emojis79 />
    case 80:
      return <Emojis80 />
    case 81:
      return <Emojis81 />
    case 82:
      return <Emojis82 />
    case 83:
      return <Emojis83 />
    case 84:
      return <Emojis84 />
    case 85:
      return <Emojis85 />
    case 86:
      return <Emojis86 />
    case 87:
      return <Emojis87 />
    case 88:
      return <Emojis88 />
    case 89:
      return <Emojis89 />
    case 90:
      return <Emojis90 />
    case 91:
      return <Emojis91 />
    case 92:
      return <Emojis92 />
    case 93:
      return <Emojis93 />
    case 94:
      return <Emojis94 />
    case 95:
      return <Emojis95 />
    case 96:
      return <Emojis96 />
    case 97:
      return <Emojis97 />
    case 98:
      return <Emojis98 />
    case 99:
      return <Emojis99 />
    case 100:
      return <Emojis100 />
    case 101:
      return <Emojis101 />
    case 102:
      return <Emojis102 />
    case 103:
      return <Emojis103 />
    case 104:
      return <Emojis104 />
    case 105:
      return <Emojis105 />
    case 106:
      return <Emojis106 />
    case 107:
      return <Emojis107 />
    case 108:
      return <Emojis108 />
    case 109:
      return <Emojis109 />
    case 110:
      return <Emojis110 />
    case 111:
      return <Emojis111 />
    case 112:
      return <Emojis112 />
    case 113:
      return <Emojis113 />
    case 114:
      return <Emojis114 />
    case 115:
      return <Emojis115 />
    case 116:
      return <Emojis116 />
    case 117:
      return <Emojis117 />
    case 118:
      return <Emojis118 />
    case 119:
      return <Emojis119 />
    case 120:
      return <Emojis120 />
    case 121:
      return <Emojis121 />
    case 122:
      return <Emojis122 />
    case 123:
      return <Emojis123 />
    case 124:
      return <Emojis124 />
    case 125:
      return <Emojis125 />
    case 126:
      return <Emojis126 />
    case 127:
      return <Emojis127 />
    case 128:
      return <Emojis128 />
    case 129:
      return <Emojis129 />
    default:
      return <Emojis129 />
  }
}

export default LevelEmojis

LevelEmojis.propTypes = {
  level: PropTypes.number.isRequired,
}
