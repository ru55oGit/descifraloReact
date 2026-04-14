import { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Popover from '@mui/material/Popover'
import { useNavigate } from 'react-router-dom'
import LanguageIcon from '@mui/icons-material/Language'
import Carrousel from 'components/Carrousel'
import useStyles from 'styles/pages'
import Language from 'components/Language'
import { useLanguageContext } from 'store/language'
import i18n from 'constants/i18n.json'
import { CATEGORIES } from 'constants/routes'
import { useTheme } from '@mui/styles'
// Array of simple symbols/icons for the rain effect
const RAIN_SYMBOLS = [
  '🎮',
  '🎯',
  '🎨',
  '🎭',
  '🎪',
  '🎲',
  '🃏',
  '🧩',
  '🔍',
  '💡',
  '⭐',
  '🌟',
  '✨',
  '🔥',
  '💎',
  '🏆',
  '🎊',
  '🎉',
  '🎈',
  '🎀',
  '🎁',
  '🏅',
  '🥇',
  '🔮',
]

const CategoriesPage = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { languageState } = useLanguageContext()
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()
  const canvasRef = useRef(null)
  const intervalRef = useRef(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  // Rain effect logic
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return undefined

    function spawnSymbol() {
      if (!canvas) return

      const el = document.createElement('div')

      el.className = 'rain-symbol'
      el.textContent =
        RAIN_SYMBOLS[Math.floor(Math.random() * RAIN_SYMBOLS.length)]

      const left = Math.random() * 100
      const dur = 5 + Math.random() * 8
      const size = 1.1 + Math.random() * 0.7 // Increased size by 3 points
      const delay = Math.random() * -dur

      el.style.cssText = `
        left: ${left}%; 
        font-size: ${size}rem; 
        animation-duration: ${dur}s; 
        animation-delay: ${delay}s;
      `

      canvas.appendChild(el)

      // Clean up symbol after animation
      setTimeout(() => {
        if (el.parentNode) {
          el.parentNode.removeChild(el)
        }
      }, (dur + Math.abs(delay)) * 1000)
    }

    // Generate symbols every 600ms
    intervalRef.current = setInterval(spawnSymbol, 600)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      // Clean remaining symbols
      if (canvas) {
        canvas.innerHTML = ''
      }
    }
  }, [])

  return (
    <Box
      className={classes.backgroundIntro}
      sx={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Canvas for symbol rain */}
      <Box
        ref={canvasRef}
        id="bg-canvas"
        sx={{
          '& .rain-symbol': {
            animation: 'fall linear infinite',
            opacity: 0.4,
            pointerEvents: 'none',
            position: 'absolute',
            top: '-50px',
            userSelect: 'none',
          },
          '@keyframes fall': {
            '0%': {
              opacity: 0,
              transform: 'translateY(-100px) rotate(0deg)',
            },
            '10%': {
              opacity: 0.4,
            },
            '100%': {
              opacity: 0,
              transform: 'translateY(100vh) rotate(360deg)',
            },
            '90%': {
              opacity: 0.4,
            },
          },
          height: '100%',
          left: 0,
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          width: '100%',
          zIndex: 0,
        }}
      />

      <Stack
        spacing={4}
        sx={{
          flex: '0.8',
          justifyContent: 'space-between',
          position: 'relative',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography
          className="lobster"
          sx={{
            color: theme.palette.white.main,
            fontSize: '4.7rem',
            textAlign: 'center',
          }}
        >
          Imaginalo
        </Typography>
        <Carrousel languageState={languageState} />
        <Box
          sx={{
            fontFamily: 'Averta',
            m: '16px auto 0 !important',
            padding: '16px',
            width: '80%',
          }}
        >
          <Typography
            sx={{
              color: theme.palette.white.main,
              fontFamily: 'Averta',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center',
            }}
          >
            {i18n.texts[languageState?.language]?.howToPlay || '¿CÓMO JUGAR?'}
          </Typography>

          <Stack spacing={1} sx={{ alignItems: 'center' }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                display: 'flex',
                gap: 1,
                height: 35,
                justifyContent: 'center',
                width: 200,
              }}
            >
              <Typography sx={{ fontSize: '32px' }}>👉</Typography>
              <Typography
                sx={{
                  color: '#fff',
                  fontFamily: 'Averta',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {i18n.texts[languageState?.language]?.selectCategory ||
                  'Selecciona categoría y nivel'}
              </Typography>
            </Box>

            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                display: 'flex',
                gap: 1,
                height: 35,
                justifyContent: 'center',
                width: 200,
              }}
            >
              <Typography sx={{ fontSize: '32px' }}>🤔</Typography>
              <Typography
                sx={{
                  color: '#fff',
                  fontFamily: 'Averta',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {i18n.texts[languageState?.language]?.riskLetters ||
                  'Arriesga letras'}
              </Typography>
            </Box>

            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                display: 'flex',
                gap: 1,
                height: 35,
                justifyContent: 'center',
                width: 200,
              }}
            >
              <Typography sx={{ fontSize: '32px' }}>😊</Typography>
              <Typography
                sx={{
                  color: '#fff',
                  fontFamily: 'Averta',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {i18n.texts[languageState?.language]?.guessWord ||
                  'Adivina la palabra'}
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Button
          className={classes.transparentButton}
          onClick={() => navigate(CATEGORIES)}
          sx={{
            '&.MuiButtonBase-root': { m: '32px auto' },
            width: 'calc(85% - 32px) !important',
          }}
        >
          <Typography variant="hxl">
            {i18n.texts[languageState?.language].play}
          </Typography>
        </Button>
      </Stack>

      <Box
        sx={{
          alignSelf: 'self-end',
          m: '0 16px 16px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Button
          aria-describedby={id}
          className={classes.transparentButton}
          onClick={handleClick}
          sx={{ '&.MuiButtonBase-root': { m: 'auto', width: 60 } }}
        >
          <LanguageIcon />
        </Button>
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'top',
          }}
          id={id}
          onClose={handleClose}
          open={open}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
        >
          <Language />
        </Popover>
      </Box>
    </Box>
  )
}

export default CategoriesPage
