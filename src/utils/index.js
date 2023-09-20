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
  ESP,
  LAT,
} from '../constants/const'

import dataAcertijos from '../data/adivinanzas.json'
import dataEmojis from '../data/emojis.json'
import dataEmojisEsp from '../data/emojis_sp.json'
import dataEmojisEng from '../data/emojis_en.json'
import dataPeliculas from '../data/peliculas.json'
import dataLogos from '../data/marcas.json'
import dataJugadores from '../data/jugadores.json'
import dataSombras from '../data/sombras.json'
import dataFunkos from '../data/funkos.json'
import dataEscudos from '../data/escudos.json'
import dataBanderas from '../data/banderas.json'
import dataAleatoria from '../data/preguntas.json'

import LevelAcertijos from '../components/Levels/LevelAdivinanzas'
import LevelEmojis from '../components/Levels/LevelEmojis'
import LevelPeliculas from '../components/Levels/LevelPeliculas'
import LevelJugadores from '../components/Levels/LevelJugadores'
import LevelSombras from '../components/Levels/LevelSombras'
import LevelLogos from '../components/Levels/LevelLogos'
import LevelFunkos from '../components/Levels/LevelFunkos'
import LevelEscudos from '../components/Levels/LevelEscudos'
import LevelBanderas from '../components/Levels/LevelBanderas'

const getWordToGuess = (category, lang) => {
  let dataList

  switch (category) {
    case ACERTIJOS:
      return dataAcertijos.listado
    case EMOJIS:
      if (lang === ESP) {
        dataList = dataEmojisEsp.listado
      } else if (lang === LAT) {
        dataList = dataEmojis.listado
      } else {
        dataList = dataEmojisEng.listado
      }

      return dataList
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

const getImage = (category, level) => {
  switch (category) {
    case ACERTIJOS:
      return <LevelAcertijos level={level} />
    case PELICULAS:
      return <LevelPeliculas level={level} />
    case LOGOS:
      return <LevelLogos level={level} />
    case EMOJIS:
      return <LevelEmojis level={level} />
    case JUGADORES:
      return <LevelJugadores level={level} />
    case SOMBRAS:
      return <LevelSombras level={level} />
    case FUNKOS:
      return <LevelFunkos level={level} />
    case ESCUDOS:
      return <LevelEscudos level={level} />
    case BANDERAS:
      return <LevelBanderas level={level} />
    default:
      return <LevelAcertijos level={level} />
  }
}

const getQuestions = () =>
  dataAleatoria.preguntas[
    Math.ceil(Math.random() * dataAleatoria.preguntas.length + 1)
  ]

export { getWordToGuess, getImage, getQuestions }
