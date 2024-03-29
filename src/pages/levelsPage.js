import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ProgressBar } from 'react-loader-spinner'
import { useTheme } from '@mui/styles'
import NavBar from 'components/NavBar'
import { useGameContext, Actions } from 'store/game'
import { useLanguageContext } from 'store/language'
import useStyles from 'styles/pages'
import { getWordToGuess, getImage, isDevice } from 'utils'
import { HOME, PLAY } from 'constants/routes'

const LevelsPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()
  const scrollToRef = useRef(null)
  const { gameState, gameDispatch } = useGameContext()
  const { languageState } = useLanguageContext()
  const [list, setList] = useState()
  const [levelReached, setLevelReached] = useState()
  const [openDonate, setOpenDonate] = useState(false)

  useEffect(() => {
    if (gameState.game) {
      setLevelReached(
        parseInt(
          JSON.parse(
            localStorage.getItem(
              `${gameState.game.category}_${languageState.language}`
            )
          )?.levelReached || 1,
          10
        )
      )
      setList(getWordToGuess(gameState.game.category, languageState.language))
      if (scrollToRef.current) {
        scrollToRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    } else {
      navigate(HOME)
    }
  }, [gameState, navigate, list, languageState.language])

  const handleClick = (level) => {
    gameDispatch({
      game: {
        category: gameState.game.category,
        level: level + 1,
      },
      type: Actions.UPDATE_LEVEL,
    })

    navigate(PLAY)
  }

  const buttons = (k, i) =>
    isDevice ? (
      <Button
        key={k.respuesta}
        ref={levelReached === i + 1 ? scrollToRef : null}
        onTouchEnd={() => handleClick(i)}
        sx={{
          background: theme.palette.white.main,
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: '4px',
          boxShadow: theme.palette.shadows.overlay,
          m: '2px',
          p: '4px',
          width: 'calc(25% - 8px)',
        }}
      >
        {getImage(gameState.game.category, i + 1)}
      </Button>
    ) : (
      <Button
        key={k.respuesta}
        ref={levelReached === i + 1 ? scrollToRef : null}
        onClick={() => handleClick(i)}
        sx={{
          background: theme.palette.white.main,
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: '4px',
          boxShadow: theme.palette.shadows.overlay,
          m: '2px',
          p: '4px',
          width: 'calc(25% - 8px)',
        }}
      >
        {getImage(gameState.game.category, i + 1)}
      </Button>
    )

  return (
    <Box className={classes.boxContainer}>
      <NavBar
        backArrow
        fixed
        openDonate={openDonate}
        setOpenDonate={setOpenDonate}
      />
      {!list && (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            height: '100vh',
            justifyContent: 'center',
          }}
        >
          <Stack>
            <ProgressBar
              barColor={theme.palette.primary.main}
              borderColor={theme.palette.primary.main}
              height="100"
              visible
              width="100"
              wrapperStyle={{}}
            />
            <Typography>CARGANDO...</Typography>
          </Stack>
        </Box>
      )}
      <Box
        sx={{
          background: theme.backgrounds[2],
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          margin: 'auto',
          maxWidth: 'calc(414px + 16px)',
          pt: '64px',
        }}
      >
        {list &&
          list.map((k, i) =>
            levelReached >= i + 1 ? (
              buttons(k, i)
            ) : (
              <Button
                key={k.respuesta}
                disabled
                sx={{
                  background: theme.palette.white.main,
                  borderRadius: '4px',
                  boxShadow: theme.palette.shadows.overlay,
                  m: '4px 2px',
                  minHeight: '90px',
                  p: '4px',
                  width: 'calc(25% - 8px)',
                }}
              >
                <Typography variant="hxxl">{i + 1}</Typography>
              </Button>
            )
          )}
      </Box>
    </Box>
  )
}

export default LevelsPage
