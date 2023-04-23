import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { GameProvider } from './store'
import IntroPage from './pages/introPage'
import PlayPage from './pages/playPage'
import theme from './theme'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <GameProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route element={<IntroPage />} path="/" />
              <Route element={<PlayPage />} path="/jugar" />
            </Routes>
          </Router>
        </ThemeProvider>
      </GameProvider>
    </StyledEngineProvider>
  )
}

export default App
