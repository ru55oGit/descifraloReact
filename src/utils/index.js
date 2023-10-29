import { ProgressBar } from 'react-loader-spinner'

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
  WUZZLES,
  ESP,
  ENG,
} from '../constants/const'

import dataAcertijos from '../data/adivinanzas.json'
import dataEmojis from '../data/emojis.json'
import dataEmojisEsp from '../data/emojis_sp.json'
import dataEmojisEng from '../data/emojis_en.json'
import dataPeliculas from '../data/peliculas.json'
import dataPeliculasEsp from '../data/peliculas_sp.json'
import dataPeliculasEng from '../data/peliculas_en.json'
import dataLogos from '../data/marcas.json'
import dataJugadores from '../data/jugadores.json'
import dataSombras from '../data/sombras.json'
import dataSombrasEsp from '../data/sombras_sp.json'
import dataSombrasEng from '../data/sombras_en.json'
import dataFunkos from '../data/funkos.json'
import dataFunkosEsp from '../data/funkos_sp.json'
import dataFunkosEng from '../data/funkos_en.json'
import dataEscudos from '../data/escudos.json'
import dataBanderas from '../data/banderas.json'
import dataBanderasEng from '../data/banderas_en.json'
import dataWuzzles from '../data/wuzzles.json'
import dataAleatoria from '../data/aleatorios.json'
import dataAleatoriaEng from '../data/aleatorios_en.json'
import dataAleatoriaEsp from '../data/aleatorios_sp.json'

import LevelAcertijos from '../components/Levels/LevelAdivinanzas'
import LevelEmojis from '../components/Levels/LevelEmojis'
import LevelPeliculas from '../components/Levels/LevelPeliculas'
import LevelJugadores from '../components/Levels/LevelJugadores'
import LevelSombras from '../components/Levels/LevelSombras'
import LevelLogos from '../components/Levels/LevelLogos'
import LevelFunkos from '../components/Levels/LevelFunkos'
import LevelEscudos from '../components/Levels/LevelEscudos'
import LevelBanderas from '../components/Levels/LevelBanderas'
import LevelWuzzles from '../components/Levels/LevelWuzzles'

const getWordToGuess = (category, lang) => {
  let dataList

  switch (category) {
    case WUZZLES:
      return dataWuzzles.listado
    case ACERTIJOS:
      return dataAcertijos.listado
    case EMOJIS:
      if (lang === ESP) {
        dataList = dataEmojisEsp.listado
      } else if (lang === ENG) {
        dataList = dataEmojisEng.listado
      } else {
        dataList = dataEmojis.listado
      }

      return dataList
    case PELICULAS:
      if (lang === ESP) {
        dataList = dataPeliculasEsp.listado
      } else if (lang === ENG) {
        dataList = dataPeliculasEng.listado
      } else {
        dataList = dataPeliculas.listado
      }

      return dataList
    case LOGOS:
      return dataLogos.listado
    case JUGADORES:
      return dataJugadores.listado
    case SOMBRAS:
      if (lang === ESP) {
        dataList = dataSombrasEsp.listado
      } else if (lang === ENG) {
        dataList = dataSombrasEng.listado
      } else {
        dataList = dataSombras.listado
      }

      return dataList
    case FUNKOS:
      if (lang === ESP) {
        dataList = dataFunkosEsp.listado
      } else if (lang === ENG) {
        dataList = dataFunkosEng.listado
      } else {
        dataList = dataFunkos.listado
      }

      return dataList
    case ESCUDOS:
      return dataEscudos.listado
    case BANDERAS:
      if (lang === ENG) {
        dataList = dataBanderasEng.listado
      } else {
        dataList = dataBanderas.listado
      }

      return dataList
    default:
      return dataAcertijos.listado
  }
}

const getImage = (category, level) => {
  switch (category) {
    case ACERTIJOS:
      return <LevelAcertijos level={level} />
    case WUZZLES:
      return <LevelWuzzles level={level} />
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
      return (
        <ProgressBar
          barColor={(theme) => theme.palette.primary.main}
          borderColor={(theme) => theme.palette.primary.main}
          height="100"
          visible
          width="100"
        />
      )
  }
}

const getQuestions = (lang) => {
  if (lang === ENG) {
    return dataAleatoriaEng.preguntas[
      Math.ceil(Math.random() * dataAleatoriaEng.preguntas.length + 1)
    ]
  }
  if (lang === ESP) {
    return dataAleatoriaEsp.preguntas[
      Math.ceil(Math.random() * dataAleatoriaEsp.preguntas.length + 1)
    ]
  }

  return dataAleatoria.preguntas[
    Math.ceil(Math.random() * dataAleatoria.preguntas.length + 1)
  ]
}

export { getWordToGuess, getImage, getQuestions }
