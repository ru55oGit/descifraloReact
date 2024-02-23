import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'

import { useTheme } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import { useLanguageContext, Actions } from 'store/language'
import { HOME } from 'constants/routes'
import { LAT, ESP, ENG } from 'constants/const'
import useStyles from './styles'

const Menu = () => {
  const classes = useStyles()
  const navigate = useNavigate()
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
    <Box className={classes.listContainer}>
      <List disablePadding>
        <ListItem className={classes.listItem} disablePadding>
          <ListItemButton onClick={() => navigate(HOME)}>
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
            <ListItemText
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography variant="hxl">Idioma/Language</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem className={classes.listItem} disablePadding>
          <ListItemButton onClick={() => handleLanguage(LAT)}>
            <Avatar
              src="/images/argentina.svg"
              sx={{ height: 28, mr: 1, width: 40 }}
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
              Español latinoamericano
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem className={classes.listItem} disablePadding>
          <ListItemButton onClick={() => handleLanguage(ESP)}>
            <Avatar
              src="/images/espania.svg"
              sx={{ height: 28, mr: 1, width: 40 }}
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
          </ListItemButton>
        </ListItem>
        <ListItem className={classes.listItem} disablePadding>
          <ListItemButton onClick={() => handleLanguage(ENG)}>
            <Avatar
              src="/images/usa.svg"
              sx={{ height: 28, mr: 1, width: 40 }}
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
          </ListItemButton>
        </ListItem>
      </List>
      <Stack sx={{ backgroundColor: theme.palette.divider, p: 2 }}>
        <Typography sx={{ textAlign: 'center' }} variant="hxl">
          Compartir
        </Typography>
        <Stack
          direction="row"
          sx={{ display: 'flex', justifyContent: 'space-evenly' }}
        >
          <Link
            href={`whatsapp://send?text=${encodeURIComponent(
              window.location.origin
            )}`}
          >
            <Avatar
              src="/images/whatsappicon.png"
              sx={{ height: 48, width: 48 }}
            />
          </Link>
          <Link
            href={`https://www.facebook.com/dialog/share?app_id=1430238181087321&display=popup&href=${encodeURIComponent(
              window.location.origin
            )}&redirect_uri=${encodeURIComponent(window.location.origin)}`}
          >
            <Avatar
              src="/images/facebookicon.png"
              sx={{ height: 48, width: 48 }}
            />
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              window.location.origin
            )}`}
            target="_blank"
          >
            <Avatar
              src="/images/twittericon.png"
              sx={{ height: 48, width: 48 }}
            />
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Menu
