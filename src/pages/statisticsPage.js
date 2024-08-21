/* eslint-disable no-unsafe-optional-chaining */
import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import NavBar from 'components/NavBar'
import { useGameContext } from 'store/game'
import { getImage } from 'utils'
import { useTheme } from '@mui/styles'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { useLanguageContext } from 'store/language'
import i18n from 'constants/i18n.json'
import { toPng } from 'html-to-image'
import { CATEGORIES } from 'constants/routes'

const StatisticsPage = () => {
  const { gameState } = useGameContext()
  const theme = useTheme()
  const { languageState } = useLanguageContext()
  const refQR = useRef()
  const [showButton, setShowButton] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!gameState?.game) navigate(CATEGORIES)

    setTimeout(() => {
      setShowButton(true)
    }, 1100)
  }, [gameState, navigate, showButton])

  const handleDownload = useCallback(() => {
    const baseNode = refQR.current

    setShowButton(false)

    if (!baseNode) return

    toPng(baseNode, {
      backgroundColor: theme.palette.common.white,
      cacheBust: false,
    })
      .then((dataUrl) => {
        const linkToDownload = document.createElement('a')

        linkToDownload.download = `datos-${gameState?.game?.level}.png`
        linkToDownload.href = dataUrl
        linkToDownload.click()
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Image download failed', err)
      })
  }, [refQR, gameState, theme])

  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        height: '100vh',
        margin: 'auto',
        maxWidth: 'calc(430px + 16px)',
      }}
    >
      <NavBar backArrow={showButton} fixed />
      <Box
        ref={refQR}
        sx={{
          pb: 3,
          position: 'relative',
          top: showButton ? 45 : 0,
        }}
      >
        <Stack
          sx={{
            '& SVG': {
              border: '3px inset grey',
              borderRadius: `${theme.borderRadius[3]}px`,
              margin: 'auto',
              width: '80%',
            },
            background: theme.palette.primary.main,
            padding: '16px 0',
            textAlign: 'center',
          }}
        >
          <Avatar
            src="/images/imaginalo.png"
            sx={{ height: 'auto', m: 'auto', p: 2, width: 'fit-content' }}
            variant="square"
          />

          {getImage(gameState?.game?.category, gameState?.game?.level)}
          <Grid
            container
            spacing={0.5}
            sx={{
              '& .MuiGrid-item': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '100px',
              },
              background: theme.palette.white.main,
              border: '3px inset grey',
              margin: 'auto',
              mb: 2,
              mt: 2,
              padding: 0.5,
              width: '80%',
            }}
          >
            <Grid border="inset" item xs={6}>
              <Typography
                color="black.dark"
                fontWeight={theme.fontWeight.bold}
                sx={{ textDecoration: 'underline' }}
                variant="h4"
              >
                {i18n.texts[languageState?.language].category}
              </Typography>
              <Typography
                color="primary.main"
                sx={{ textTransform: 'capitalize' }}
                variant="hxl"
              >
                {gameState?.game?.category}
              </Typography>
            </Grid>
            <Grid border="inset" item xs={6}>
              <Typography
                color="black.dark"
                fontWeight={theme.fontWeight.bold}
                sx={{ textDecoration: 'underline' }}
                variant="h4"
              >
                {i18n.texts[languageState?.language].levelReached}
              </Typography>
              <Typography color="primary.main" variant="hxl">
                {gameState?.game?.level}
              </Typography>
            </Grid>
            <Grid border="inset" item xs={6}>
              <Typography
                color="black.dark"
                fontWeight={theme.fontWeight.bold}
                sx={{ textDecoration: 'underline' }}
                variant="h4"
              >
                {i18n.texts[languageState?.language].totalLevels}
              </Typography>
              <Typography color="primary.main" variant="hxl">
                {gameState?.game?.maxLevel}
              </Typography>
            </Grid>
            <Grid border="inset" item xs={6}>
              <Typography
                color="black.dark"
                fontWeight={theme.fontWeight.bold}
                sx={{ textDecoration: 'underline' }}
                variant="h4"
              >
                {i18n.texts[languageState?.language].percDone}
              </Typography>
              <Typography color="primary.main" variant="hxl">
                %
                {gameState?.game?.level === 1
                  ? 0.0
                  : (
                      (gameState?.game?.level / gameState?.game?.maxLevel) *
                      100
                    ).toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
          {showButton ? (
            <Button
              onClick={handleDownload}
              sx={{
                border: `1px solid ${theme.palette.white.main}`,
                color: theme.palette.white.main,
                margin: 'auto',
                width: '80%',
              }}
            >
              {i18n.texts[languageState?.language].downAndShare}
            </Button>
          ) : (
            <Typography
              color="primary.main"
              sx={{
                background: theme.palette.white.main,
                borderRadius: '4px',
                display: 'block',
                height: 40,
                margin: '8px auto 16px',
                padding: 1,
                width: 'fit-content',
              }}
              variant="hxl"
            >
              {window.location.origin}
            </Typography>
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default StatisticsPage
