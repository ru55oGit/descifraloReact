import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material'
import Paper from '../components/Paper'
import Splash from '../components/Splash'
import Login from '../components/Login'

const IntroPage = () => {
  const theme = useTheme()
  const [splash, setSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => setSplash(false), 3000)
  })

  return (
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
      {splash ? <Splash /> : <Login />}
    </Paper>
  )
}

export default IntroPage
