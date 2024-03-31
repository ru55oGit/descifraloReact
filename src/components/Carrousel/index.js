/* eslint-disable import/no-extraneous-dependencies */
import Carousel from 'nuka-carousel'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/styles'
import { getImage } from 'utils'

import {
  ACERTIJOS,
  LOGOS,
  SOMBRAS,
  FUNKOS,
  ESCUDOS,
  PELICULAS,
  EMOJIS,
  WUZZLES,
  ENG,
} from 'constants/const'

const Carrousel = ({ languageState }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        '&.MuiBox-root': {
          m: 'auto',
        },
        background: theme.palette.white.main,
        borderRadius: `${theme.borderRadius[2]}px`,
        padding: '16px 8px',
        width: 'calc(90% - 64px)',
      }}
    >
      <Carousel autoplay autoplayInterval={3000} withoutControls wrapAround>
        <Box
          sx={{
            m: 'auto',
            width: '80%',
          }}
        >
          {getImage(
            languageState?.language === ENG ? WUZZLES : ACERTIJOS,
            Math.floor(Math.random() * 100)
          )}
        </Box>
        <Box
          sx={{
            m: 'auto',
            width: '80%',
          }}
        >
          {getImage(LOGOS, Math.floor(Math.random() * 100))}
        </Box>
        <Box
          sx={{
            m: 'auto',
            width: '80%',
          }}
        >
          {getImage(FUNKOS, Math.floor(Math.random() * 100))}
        </Box>
        <Box
          sx={{
            m: 'auto',
            width: '80%',
          }}
        >
          {getImage(ESCUDOS, Math.floor(Math.random() * 100))}
        </Box>
        <Box
          sx={{
            m: 'auto',
            width: '80%',
          }}
        >
          {getImage(SOMBRAS, Math.floor(Math.random() * 100))}
        </Box>
        <Box
          sx={{
            m: 'auto',
            width: '80%',
          }}
        >
          {getImage(EMOJIS, Math.floor(Math.random() * 100))}
        </Box>
        <Box
          sx={{
            m: 'auto',
            width: '80%',
          }}
        >
          {getImage(PELICULAS, Math.floor(Math.random() * 100))}
        </Box>
      </Carousel>
    </Box>
  )
}

export default Carrousel

Carrousel.propTypes = {
  languageState: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
}
