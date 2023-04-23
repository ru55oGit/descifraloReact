import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '../components/Paper'
import Splash from '../components/Splash'
import Categories from '../components/Categories'
import useStyles from '../styles/pages'

const IntroPage = () => {
  const theme = useTheme()
  const classes = useStyles()
  const [splash, setSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => setSplash(false), 570)
  })

  return (
    <Box>
      {splash ? (
        <Paper
          sx={{
            alignItems: 'center',
            borderColor: `1px solid ${theme.palette.primary.main}`,
            display: 'flex',
            height: '95vh',
            justifyContent: 'center',
            margin: 2,
          }}
        >
          <Splash />
        </Paper>
      ) : (
        <Box className={classes.boxContainer}>
          <Categories />
        </Box>
      )}
    </Box>
  )
}

export default IntroPage
