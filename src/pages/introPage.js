import { useState } from 'react'
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

const CategoriesPage = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { languageState } = useLanguageContext()
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Box className={classes.backgroundIntro}>
      <Stack
        spacing={4}
        sx={{
          flex: '0.8',
          justifyContent: 'space-between',
          textAlign: 'center',
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
        <Typography
          color="white.main"
          dangerouslySetInnerHTML={{
            __html: i18n.texts[languageState?.language].description,
          }}
          sx={{
            fontFamily: 'Averta',
            fontStyle: 'italic',
            m: '16px auto 0 !important',
            width: '90%',
          }}
          variant="hxl"
        />
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

      <Box sx={{ bottom: 16, position: 'absolute', right: 16 }}>
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
