import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/styles'
import { useLanguageContext, Actions } from 'store/language'
import { ENG, ESP, LAT } from 'constants/const'

const Language = () => {
  const theme = useTheme()
  const { languageDispatch, languageState } = useLanguageContext()

  const [language, setLanguage] = useState('latino')

  useEffect(() => {
    if (languageState) {
      setLanguage(languageState.language)
    }
  }, [languageState])

  const handleLanguage = (lang) => {
    setLanguage(lang)
    languageDispatch({
      language: lang,
      type: Actions.UPDATE_LANGUAGE,
    })
  }

  return (
    <Stack sx={{ backgroundColor: theme.palette.divider, p: 1 }}>
      <Stack direction="row" sx={{ justifyContent: 'space-evenly', mt: 1 }}>
        <Button
          onClick={() => handleLanguage(LAT)}
          sx={{
            '&:hover': { background: 'transparent' },
            color: theme.palette.text.primary,
          }}
        >
          <Stack sx={{ alignItems: 'center', display: 'flex' }}>
            <Avatar
              src="images/argentina.svg"
              sx={{ height: 28, width: 40 }}
              variant="square"
            />
            <Typography
              fontWeight={
                language === LAT
                  ? theme.fontWeight.bold
                  : theme.fontWeight.regular
              }
              variant={language === LAT ? 'body1' : 'body0'}
            >
              Esp. Lat.
            </Typography>
          </Stack>
        </Button>
        <Button
          onClick={() => handleLanguage(ESP)}
          sx={{
            '&:hover': { background: 'transparent' },
            color: theme.palette.text.primary,
          }}
        >
          <Stack sx={{ alignItems: 'center', display: 'flex' }}>
            <Avatar
              src="images/espania.svg"
              sx={{ height: 28, width: 40 }}
              variant="square"
            />
            <Typography
              fontWeight={
                language === ESP
                  ? theme.fontWeight.bold
                  : theme.fontWeight.regular
              }
              variant={language === ESP ? 'body1' : 'body0'}
            >
              Español
            </Typography>
          </Stack>
        </Button>
        <Button
          onClick={() => handleLanguage(ENG)}
          sx={{
            '&:hover': { background: 'transparent' },
            color: theme.palette.text.primary,
          }}
        >
          <Stack sx={{ alignItems: 'center', display: 'flex' }}>
            <Avatar
              src="images/usa.svg"
              sx={{ height: 28, width: 40 }}
              variant="square"
            />
            <Typography
              fontWeight={
                language === ENG
                  ? theme.fontWeight.bold
                  : theme.fontWeight.regular
              }
              variant={language === ENG ? 'body1' : 'body0'}
            >
              English
            </Typography>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  )
}

export default Language
