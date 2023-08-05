import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { GameProvider } from './store/game'
import { LanguageProvider } from './store/language'
import IntroPage from './pages/introPage'
import CategoriesPage from './pages/categoriesPage'
import PlayPage from './pages/playPage'
import LevelsPage from './pages/levelsPage'
import theme from './theme'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <LanguageProvider>
        <GameProvider>
          <ThemeProvider theme={theme}>
            <Router>
              <Routes>
                <Route element={<IntroPage />} path="/" />
                <Route element={<CategoriesPage />} path="/categorias" />
                <Route element={<PlayPage />} path="/jugar" />
                <Route element={<LevelsPage />} path="/niveles" />
              </Routes>
            </Router>
          </ThemeProvider>
        </GameProvider>
      </LanguageProvider>
    </StyledEngineProvider>
  )
}

export default App
