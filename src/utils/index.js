import {
  ACERTIJOS,
  EMOJIS,
  PELICULAS,
  LOGOS,
  JUGADORES,
  SOMBRAS,
  FUNKOS,
  ESCUDOS,
  BANDERAS,
} from '../constants/const'

import dataAcertijos from '../data/adivinanzas.json'
import dataEmojis from '../data/emojis.json'
import dataPeliculas from '../data/peliculas.json'
import dataLogos from '../data/marcas.json'
import dataJugadores from '../data/jugadores.json'
import dataSombras from '../data/sombras.json'
import dataFunkos from '../data/funkos.json'
import dataEscudos from '../data/escudos.json'
import dataBanderas from '../data/banderas.json'

const getWordToGuess = (category) => {
  switch (category) {
    case ACERTIJOS:
      return dataAcertijos.listado
    case EMOJIS:
      return dataEmojis.listado
    case PELICULAS:
      return dataPeliculas.listado
    case LOGOS:
      return dataLogos.listado
    case JUGADORES:
      return dataJugadores.listado
    case SOMBRAS:
      return dataSombras.listado
    case FUNKOS:
      return dataFunkos.listado
    case ESCUDOS:
      return dataEscudos.listado
    case BANDERAS:
      return dataBanderas.listado
    default:
      return dataAcertijos.listado
  }
}

export default getWordToGuess
