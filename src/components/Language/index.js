import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/styles'
import { useLanguageContext, Actions } from '../../store/language'

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
      <Typography sx={{ textAlign: 'center' }} variant="h1">
        Idioma/Language
      </Typography>
      <Stack direction="row" sx={{ justifyContent: 'space-evenly', mt: 1 }}>
        <Button
          onClick={() => handleLanguage('lat')}
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
                language === 'lat'
                  ? theme.fontWeight.bold
                  : theme.fontWeight.regular
              }
              variant={language === 'lat' ? 'body1' : 'body0'}
            >
              Latino
            </Typography>
          </Stack>
        </Button>
        <Button
          onClick={() => handleLanguage('esp')}
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
                language === 'esp'
                  ? theme.fontWeight.bold
                  : theme.fontWeight.regular
              }
              variant={language === 'esp' ? 'body1' : 'body0'}
            >
              Español
            </Typography>
          </Stack>
        </Button>
        {/* <Stack sx={{ alignItems: 'center', display: 'flex' }}>
            <Avatar
              onClick={() => handleLanguage('eng')}
              src="images/usa.svg"
              sx={{ height: 24, width: 36 }}
              variant="square"
            />
            <Typography
              fontWeight={
                language === 'eng'
                  ? theme.fontWeight.bold
                  : theme.fontWeight.regular
              }
            >
              English
            </Typography>
          </Stack> */}
      </Stack>
    </Stack>
  )
}

export default Language
