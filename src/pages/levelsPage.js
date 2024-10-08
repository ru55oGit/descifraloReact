import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import { ProgressBar } from 'react-loader-spinner'
import { useTheme } from '@mui/styles'
import NavBar from 'components/NavBar'
import Collaborations from 'components/Collaborations'
import { useGameContext, Actions } from 'store/game'
import { useLanguageContext } from 'store/language'
import useStyles from 'styles/pages'
import { getWordToGuess, getImage, isDevice } from 'utils'
import { CATEGORIES, PLAY } from 'constants/routes'
import i18n from 'constants/i18n.json'

const LevelsPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()
  const scrollToRef = useRef(null)
  const { gameState, gameDispatch } = useGameContext()
  const { languageState } = useLanguageContext()
  const [list, setList] = useState()
  const [levelReached, setLevelReached] = useState()
  const [openDialog, setOpenDialog] = useState()

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
      navigate(CATEGORIES)
    }
  }, [gameState, navigate, list, languageState.language])

  const handleClick = (level) => {
    gameDispatch({
      game: {
        category: gameState.game.category,
        level: level + 1,
        maxLevel: list?.length,
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
          borderRadius: 0.5,
          boxShadow: theme.palette.shadows.overlay,
          m: 0.25,
          p: 0.5,
          width: 'calc(25% - 8px)',
        }}
      >
        {getImage(gameState.game.category, i + 1)}
        <Typography
          sx={{
            background: theme.palette.primary.main,
            borderRadius: '50%',
            bottom: 2,
            color: theme.palette.white.main,
            position: 'absolute',
            right: 2,
            width: 24,
          }}
          variant="body2"
        >
          {i + 1}
        </Typography>
      </Button>
    ) : (
      <Button
        key={k.respuesta}
        ref={levelReached === i + 1 ? scrollToRef : null}
        onClick={() => handleClick(i)}
        sx={{
          background: theme.palette.white.main,
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: 0.5,
          boxShadow: theme.palette.shadows.overlay,
          m: 0.25,
          p: 0.5,
          width: 'calc(25% - 8px)',
        }}
      >
        {getImage(gameState.game.category, i + 1)}
        <Typography
          sx={{
            background: theme.palette.primary.main,
            borderRadius: '50%',
            bottom: 2,
            color: theme.palette.white.main,
            position: 'absolute',
            right: 2,
            width: 24,
          }}
          variant="body2"
        >
          {i + 1}
        </Typography>
      </Button>
    )

  const dialog = () => (
    <Dialog
      onClose={() => setOpenDialog(false)}
      open={openDialog}
      PaperProps={{
        component: 'form',
        onSubmit: () => {
          localStorage.removeItem(
            `${gameState?.game?.category}_${languageState?.language}`
          )
          setOpenDialog(false)
          navigate(CATEGORIES)
        },
      }}
    >
      <DialogTitle>
        {i18n.texts[languageState?.language].deleteProgressTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {i18n.texts[languageState?.language].deleteProgressDescription}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>
          {i18n.texts[languageState?.language].cancel}
        </Button>
        <Button type="submit">
          {' '}
          {i18n.texts[languageState?.language].accept}
        </Button>
      </DialogActions>
    </Dialog>
  )

  return (
    <Box className={classes.boxContainer}>
      <NavBar backArrow fixed />
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
          maxWidth: 'calc(430px + 16px)',
          pt: { sm: 8, xs: 10 },
          px: { sm: 0, xs: 3 },
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
                  borderRadius: 0.5,
                  boxShadow: theme.palette.shadows.overlay,
                  m: '4px 2px',
                  minHeight: { sm: 100, xs: 'calc(25vw - 16px)' },
                  p: 0.5,
                  width: 'calc(25% - 8px)',
                }}
              >
                <Typography variant="hxxl">{i + 1}</Typography>
              </Button>
            )
          )}
        <Button onClick={() => setOpenDialog(true)}>
          {i18n.texts[languageState?.language].deleteProgressTitle}
        </Button>
        {dialog()}
        <Box sx={{ width: 'calc(100% - 8px)' }}>
          <Collaborations />
        </Box>
      </Box>
    </Box>
  )
}

export default LevelsPage
