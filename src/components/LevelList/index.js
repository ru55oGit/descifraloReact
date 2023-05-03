import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/styles'
import useStyles from './styles'
import { useLanguageContext, Actions } from '../../store/language'

const LevelList = () => {
  const theme = useTheme()
  const classes = useStyles()
  const { languageDispatch, languageState } = useLanguageContext()
  const [language, setLanguage] = useState('latino')

  useEffect(() => {
    if (languageState) {
      setLanguage(languageState.language)
    }
  }, [language])

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
                Seleccion Argentina
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem className={classes.listItem} disablePadding>
          <ListItemButton>
            <ListItemText>
              <Typography color="text.primary" variant="h2">
                River Plate
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
          <Stack sx={{ alignItems: 'center', display: 'flex' }}>
            <Avatar
              onClick={() => handleLanguage('latino')}
              src="images/argentina.svg"
              sx={{ height: 24, width: 36 }}
              variant="square"
            />
            <Typography
              fontWeight={
                language === 'latino'
                  ? theme.fontWeight.bold
                  : theme.fontWeight.regular
              }
            >
              Latino
            </Typography>
          </Stack>
          <Stack sx={{ alignItems: 'center', display: 'flex' }}>
            <Avatar
              onClick={() => handleLanguage('español')}
              src="images/espania.svg"
              sx={{ height: 24, width: 36 }}
              variant="square"
            />
            <Typography
              fontWeight={
                language === 'español'
                  ? theme.fontWeight.bold
                  : theme.fontWeight.regular
              }
            >
              Español
            </Typography>
          </Stack>
          <Stack sx={{ alignItems: 'center', display: 'flex' }}>
            <Avatar
              onClick={() => handleLanguage('english')}
              src="images/usa.svg"
              sx={{ height: 24, width: 36 }}
              variant="square"
            />
            <Typography
              fontWeight={
                language === 'english'
                  ? theme.fontWeight.bold
                  : theme.fontWeight.regular
              }
            >
              English
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default LevelList
