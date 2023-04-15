import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import IntroPage from './pages/introPage'
import LevelsPage from './pages/categoriesPage'
import theme from './theme'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route element={<IntroPage />} path="/" />
            <Route element={<LevelsPage />} path="/niveles" />
            <Route element={<LevelsPage />} path="/niveles" />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
