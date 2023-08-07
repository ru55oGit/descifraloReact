/* eslint-disable import/no-extraneous-dependencies */
import Carousel from 'nuka-carousel'

import Box from '@mui/material/Box'
import { useTheme } from '@mui/styles'
import { getImage } from '../../utils'

import { ACERTIJOS, LOGOS, SOMBRAS } from '../../constants/const'

const Carrousel = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        background: theme.palette.white.main,
        borderRadius: `${theme.borderRadius[2]}px`,
        m: 'auto',
        p: 2,
        width: 'calc(100% - 64px)',
      }}
    >
      <Carousel autoplay autoplayInterval={3000} withoutControls wrapAround>
        <Box
          sx={{
            m: 'auto',
            width: '80%',
          }}
        >
          {getImage(ACERTIJOS, Math.floor(Math.random() * 10))}
        </Box>
        <Box
          sx={{
            m: 'auto',
            width: '80%',
          }}
        >
          {getImage(LOGOS, Math.floor(Math.random() * 10))}
        </Box>
        <Box
          sx={{
            m: 'auto',
            width: '80%',
          }}
        >
          {getImage(SOMBRAS, Math.floor(Math.random() * 10))}
        </Box>
      </Carousel>
    </Box>
  )
}

export default Carrousel
