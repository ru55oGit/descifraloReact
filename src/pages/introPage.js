import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import Paper from '../components/Paper'
import Splash from '../components/Splash'

const IntroPage = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => navigate('/niveles'), 3000)
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
      <Splash />
    </Paper>
  )
}

export default IntroPage
