// eslint-disable-next-line import/no-extraneous-dependencies
import { ThreeCircles } from 'react-loader-spinner'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import useStyles from './styles'

const Splash = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box className={classes.boxContainer}>
      <ThreeCircles
        ariaLabel="three-circles-rotating"
        color={theme.palette.primary.main}
        height="100"
        visible
        width="100"
        wrapperStyle={{}}
      />
    </Box>
  )
}

export default Splash
