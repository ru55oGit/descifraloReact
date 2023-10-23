import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Chip from '../Chip'
import { useLanguageContext } from '../../store/language'
import i18n from '../../constants/i18n.json'

import {
  ACERTIJOS,
  PELICULAS,
  LOGOS,
  EMOJIS,
  SOMBRAS,
  FUNKOS,
  ESCUDOS,
  BANDERAS,
  WUZZLES,
  ENG,
} from '../../constants/const'
import useStyles from './styles'

const random = [
  ACERTIJOS,
  PELICULAS,
  LOGOS,
  EMOJIS,
  SOMBRAS,
  FUNKOS,
  ESCUDOS,
  BANDERAS,
  WUZZLES,
]

const Levels = () => {
  const classes = useStyles()
  const [levelAcertijos, setLevelAcertijos] = useState()
  const [levelEmojis, setLevelEmojis] = useState()
  const [levelLogos, setLevelLogos] = useState()
  const [levelPeliculas, setLevelPeliculas] = useState()
  const [levelSombras, setLevelSombras] = useState()
  const [levelFunkos, setLevelFunkos] = useState()
  const [levelEscudos, setLevelEscudos] = useState()
  const [levelBanderas, setLevelBanderas] = useState()
  const [levelWuzzles, setLevelWuzzles] = useState()
  const { languageState } = useLanguageContext()

  useEffect(() => {
    setLevelAcertijos(
      JSON.parse(
        localStorage?.getItem(`${ACERTIJOS}_${languageState.language}`)
      )?.levelReached || 1
    )
    setLevelEmojis(
      JSON.parse(localStorage?.getItem(`${EMOJIS}_${languageState.language}`))
        ?.levelReached || 1
    )
    setLevelLogos(
      JSON.parse(localStorage?.getItem(`${LOGOS}_${languageState.language}`))
        ?.levelReached || 1
    )
    setLevelPeliculas(
      JSON.parse(
        localStorage?.getItem(`${PELICULAS}_${languageState.language}`)
      )?.levelReached || 1
    )
    setLevelSombras(
      JSON.parse(localStorage?.getItem(`${SOMBRAS}_${languageState.language}`))
        ?.levelReached || 1
    )
    setLevelFunkos(
      JSON.parse(localStorage?.getItem(`${FUNKOS}_${languageState.language}`))
        ?.levelReached || 1
    )
    setLevelEscudos(
      JSON.parse(localStorage?.getItem(`${ESCUDOS}_${languageState.language}`))
        ?.levelReached || 1
    )
    setLevelBanderas(
      JSON.parse(localStorage?.getItem(`${BANDERAS}_${languageState.language}`))
        ?.levelReached || 1
    )
    setLevelWuzzles(
      JSON.parse(localStorage?.getItem(`${WUZZLES}_${languageState.language}`))
        ?.levelReached || 1
    )
  }, [languageState])

  return (
    <Box className={classes.containerCategories}>
      {languageState.language === ENG ? (
        <Chip
          category={WUZZLES}
          level={parseInt(levelWuzzles, 10)}
          title={i18n.texts[languageState?.language].puzzles}
        />
      ) : (
        <Chip
          category={ACERTIJOS}
          level={parseInt(levelAcertijos, 10)}
          title={i18n.texts[languageState?.language].puzzles}
        />
      )}
      <Chip
        category={PELICULAS}
        level={parseInt(levelPeliculas, 10)}
        title={i18n.texts[languageState?.language].movies}
      />
      <Chip
        category={EMOJIS}
        level={parseInt(levelEmojis, 10)}
        title={i18n.texts[languageState?.language].emojis}
      />
      <Chip
        category={LOGOS}
        level={parseInt(levelLogos, 10)}
        title={i18n.texts[languageState?.language].logos}
      />
      <Chip
        category={SOMBRAS}
        level={parseInt(levelSombras, 10)}
        title={i18n.texts[languageState?.language].shadows}
      />
      <Chip
        category={FUNKOS}
        level={parseInt(levelFunkos, 10)}
        title={i18n.texts[languageState?.language].funkos}
      />
      <Chip
        category={ESCUDOS}
        level={parseInt(levelEscudos, 10)}
        title={i18n.texts[languageState?.language].soccerLogos}
      />
      <Chip
        category={BANDERAS}
        level={parseInt(levelBanderas, 10)}
        title={i18n.texts[languageState?.language].flags}
      />
      <Chip
        category={random[Math.ceil(Math.random() * 8)]}
        isRandom
        level={Math.ceil(Math.random() * 99)}
        title={i18n.texts[languageState?.language].random}
      />
    </Box>
  )
}

export default Levels
