/* eslint-disable no-unsafe-optional-chaining */
import { useState, useEffect, useCallback, useRef } from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import NavBar from 'components/NavBar'
import { useGameContext } from 'store/game'
import { getImage } from 'utils'
import useStyles from 'styles/pages'
import { useTheme } from '@mui/styles'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { useLanguageContext } from 'store/language'
import i18n from 'constants/i18n.json'
import { toPng } from 'html-to-image'

const StatisticsPage = () => {
  const { gameState } = useGameContext()
  const classes = useStyles()
  const theme = useTheme()
  const { languageState } = useLanguageContext()
  const refQR = useRef()
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    setShowButton(true)
  }, [showButton])

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

        linkToDownload.download = 'datos.png'
        linkToDownload.href = dataUrl
        linkToDownload.click()
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Image download failed', err)
      })
  }, [refQR, theme])

  return (
    <Box ref={refQR} sx={{ pb: 9 }}>
      <Box className={classes.boxContainer}>
        <NavBar backArrow={showButton} fixed />
        <Stack
          sx={{
            '& SVG': {
              borderRadius: `${theme.borderRadius[3]}px`,
              margin: 'auto',
              width: '50%',
            },
            backgroundColor: theme.palette.primary.main,
            height: '100%',
            paddingTop: 9,
            textAlign: 'center',
          }}
        >
          <Typography
            className="lobster"
            color="white.main"
            sx={{ textTransform: 'capitalize' }}
            variant="hxxl"
          >
            {gameState?.game?.category}
          </Typography>
          {getImage(gameState?.game?.category, gameState?.game?.level)}
          <Stack sx={{ paddingTop: 3 }}>
            <Typography
              color="white.main"
              fontWeight={theme.fontWeight.bold}
              variant="h4"
            >
              {i18n.texts[languageState?.language].levelReached}
            </Typography>
            <Typography color="white.main" variant="hxl">
              {gameState?.game?.level}
            </Typography>
            <Typography
              color="white.main"
              fontWeight={theme.fontWeight.bold}
              variant="h4"
            >
              {i18n.texts[languageState?.language].totalLevels}
            </Typography>
            <Typography color="white.main" variant="hxl">
              {gameState?.game?.maxLevel}
            </Typography>
            <Typography
              color="white.main"
              fontWeight={theme.fontWeight.bold}
              variant="h4"
            >
              {i18n.texts[languageState?.language].percDone}
            </Typography>
            <Typography color="white.main" variant="hxl">
              %
              {(
                (gameState?.game?.level / gameState?.game?.maxLevel) *
                100
              ).toFixed(2)}
            </Typography>
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
                  margin: '16px auto',
                  padding: 1,
                  width: 'fit-content',
                }}
                variant="hxl"
              >
                {window.location.origin}
              </Typography>
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default StatisticsPage
