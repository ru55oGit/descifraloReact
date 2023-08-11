import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Chip from '../Chip'

import {
  ACERTIJOS,
  PELICULAS,
  LOGOS,
  EMOJIS,
  JUGADORES,
  SOMBRAS,
  FUNKOS,
  ESCUDOS,
  BANDERAS,
} from '../../constants/const'
import useStyles from './styles'

const Levels = () => {
  const classes = useStyles()
  const [levelAcertijos, setLevelAcertijos] = useState()
  const [levelEmojis, setLevelEmojis] = useState()
  const [levelLogos, setLevelLogos] = useState()
  const [levelPeliculas, setLevelPeliculas] = useState()
  const [levelJugadores, setLevelJugadores] = useState()
  const [levelSombras, setLevelSombras] = useState()
  const [levelFunkos, setLevelFunkos] = useState()
  const [levelEscudos, setLevelEscudos] = useState()
  const [levelBanderas, setLevelBanderas] = useState()

  useEffect(() => {
    setLevelAcertijos(
      JSON.parse(localStorage?.getItem(ACERTIJOS))?.levelReached || 1
    )
    setLevelEmojis(JSON.parse(localStorage?.getItem(EMOJIS))?.levelReached || 1)
    setLevelLogos(JSON.parse(localStorage?.getItem(LOGOS))?.levelReached || 1)
    setLevelPeliculas(
      JSON.parse(localStorage?.getItem(PELICULAS))?.levelReached || 1
    )
    setLevelJugadores(
      JSON.parse(localStorage?.getItem(JUGADORES))?.levelReached || 1
    )
    setLevelSombras(
      JSON.parse(localStorage?.getItem(SOMBRAS))?.levelReached || 1
    )
    setLevelFunkos(JSON.parse(localStorage?.getItem(FUNKOS))?.levelReached || 1)
    setLevelEscudos(
      JSON.parse(localStorage?.getItem(ESCUDOS))?.levelReached || 1
    )
    setLevelBanderas(
      JSON.parse(localStorage?.getItem(BANDERAS))?.levelReached || 1
    )
  }, [])

  return (
    <Box className={classes.containerLevel}>
      <Chip category={ACERTIJOS} level={parseInt(levelAcertijos, 10)} />
      <Chip category={PELICULAS} level={parseInt(levelPeliculas, 10)} />
      <Chip category={EMOJIS} level={parseInt(levelEmojis, 10)} />
      <Chip category={LOGOS} level={parseInt(levelLogos, 10)} />
      <Chip category={SOMBRAS} level={parseInt(levelSombras, 10)} />
      <Chip category={FUNKOS} level={parseInt(levelFunkos, 10)} />
      <Chip category={JUGADORES} level={parseInt(levelJugadores, 10)} />
      <Chip category={ESCUDOS} level={parseInt(levelEscudos, 10)} />
      <Chip category={BANDERAS} level={parseInt(levelBanderas, 10)} />
    </Box>
  )
}

export default Levels
