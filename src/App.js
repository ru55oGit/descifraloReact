/* eslint-disable import/no-extraneous-dependencies */
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { PostHogProvider } from 'posthog-js/react'
import { GameProvider } from './store/game'
import { LanguageProvider } from './store/language'
import IntroPage from './pages/introPage'
import CategoriesPage from './pages/categoriesPage'
import PlayPage from './pages/playPage'
import LevelsPage from './pages/levelsPage'
import SuccessPage from './pages/successPage'
import StatisticsPage from './pages/statisticsPage'
import theme from './theme'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <PostHogProvider
        apiKey="phc_f2aPtg549cBhRcXslGO03BMRaj6ZMYrUEfAl7w8UluR"
        options={{ api_host: 'https://us.i.posthog.com' }}
      >
        <LanguageProvider>
          <GameProvider>
            <ThemeProvider theme={theme}>
              <Router>
                <Routes>
                  <Route element={<IntroPage />} path="/" />
                  <Route element={<CategoriesPage />} path="/categorias" />
                  <Route element={<PlayPage />} path="/jugar" />
                  <Route element={<LevelsPage />} path="/niveles" />
                  <Route element={<SuccessPage />} path="/sig/:category" />
                  <Route element={<StatisticsPage />} path="/estadisticas" />
                </Routes>
              </Router>
            </ThemeProvider>
          </GameProvider>
        </LanguageProvider>
      </PostHogProvider>
    </StyledEngineProvider>
  )
}

export default App
