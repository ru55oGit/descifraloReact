import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { getImage } from '../../utils'
import { LEVELS } from '../../constants/routes'
import {
  Acertijos,
  Emojis,
  Logos,
  Peliculas,
  Jugadores,
  Sombras,
  Funkos,
  Escudos,
  Banderas,
} from '../IconsCategories'
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
import { useGameContext, Actions } from '../../store/game'
import useStyles from './styles'

const Levels = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { gameDispatch } = useGameContext()
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

  const handleClick = (category, level) => {
    gameDispatch({
      game: { category, level },
      type: Actions.UPDATE_LEVEL,
    })

    navigate(LEVELS)
  }

  return (
    <Box className={classes.containerLevel}>
      <Stack
        direction="row"
        onClick={() => handleClick(ACERTIJOS, levelAcertijos)}
      >
        <Stack sx={{ width: '50%' }}>
          <Acertijos />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          {getImage(ACERTIJOS, parseInt(levelAcertijos, 10))}
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(EMOJIS, levelEmojis)}>
        <Stack sx={{ width: '50%' }}>
          {getImage(EMOJIS, parseInt(levelEmojis, 10))}
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Emojis />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(LOGOS, levelLogos)}>
        <Stack sx={{ width: '50%' }}>
          <Logos />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          {getImage(LOGOS, parseInt(levelLogos, 10))}
        </Stack>
      </Stack>
      <Stack
        direction="row"
        onClick={() => handleClick(PELICULAS, levelPeliculas)}
      >
        <Stack sx={{ width: '50%' }}>
          {getImage(PELICULAS, parseInt(levelPeliculas, 10))}
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Peliculas />
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(FUNKOS, levelFunkos)}>
        <Stack sx={{ width: '50%' }}>
          <Funkos />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          {getImage(FUNKOS, parseInt(levelFunkos, 10))}
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(SOMBRAS, levelSombras)}>
        <Stack sx={{ width: '50%' }}>
          {getImage(SOMBRAS, parseInt(levelSombras, 10))}
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Sombras />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        onClick={() => handleClick(JUGADORES, levelJugadores)}
      >
        <Stack sx={{ width: '50%' }}>
          <Jugadores />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          {getImage(JUGADORES, parseInt(levelJugadores, 10))}
        </Stack>
      </Stack>
      <Stack direction="row" onClick={() => handleClick(ESCUDOS, levelEscudos)}>
        <Stack sx={{ width: '50%' }}>
          {getImage(ESCUDOS, parseInt(levelEscudos, 10))}
        </Stack>
        <Stack sx={{ width: '50%' }}>
          <Escudos />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        onClick={() => handleClick(BANDERAS, levelBanderas)}
      >
        <Stack sx={{ width: '50%' }}>
          <Banderas />
        </Stack>
        <Stack sx={{ width: '50%' }}>
          {getImage(BANDERAS, parseInt(levelBanderas, 10))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Levels
