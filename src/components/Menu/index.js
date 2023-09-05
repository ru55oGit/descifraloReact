import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import useStyles from './styles'
import { useLanguageContext, Actions } from '../../store/language'

const Menu = () => {
  const theme = useTheme()
  const classes = useStyles()
  const { languageDispatch, languageState } = useLanguageContext()
  const [language, setLanguage] = useState('latino')
  const navigate = useNavigate()

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
    <Box className={classes.listContainer}>
      <List disablePadding>
        <ListItem className={classes.listItem} disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemText>
              <Typography color="text.primary" variant="h2">
                Inicio
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem className={classes.listItem} disablePadding>
          <ListItemButton>
            <ListItemText>
              <Typography color="text.primary" variant="h2">
                Descifralo
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem className={classes.listItem} disablePadding>
          <ListItemButton>
            <ListItemText>
              <Typography color="text.primary" variant="h2">
                Niños
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Stack sx={{ backgroundColor: theme.palette.divider, p: 2 }}>
        <Typography sx={{ textAlign: 'center' }} variant="h1">
          Idioma/Language
        </Typography>
        <Stack direction="row" sx={{ justifyContent: 'space-evenly', mt: 2 }}>
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
    </Box>
  )
}

export default Menu
