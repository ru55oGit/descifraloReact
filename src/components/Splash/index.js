// eslint-disable-next-line import/no-extraneous-dependencies
import { ProgressBar } from 'react-loader-spinner'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import useStyles from './styles'

const Splash = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box className={classes.boxContainer}>
      <ProgressBar
        barColor={theme.palette.primary.main}
        borderColor={theme.palette.primary.main}
        height="100"
        visible
        width="100"
        wrapperStyle={{}}
      />
    </Box>
  )
}

export default Splash
