import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import i18n from 'constants/i18n.json'
import Shares from 'components/Shares'
import { useTheme } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import { useLanguageContext, Actions } from 'store/language'
import { HOME, CATEGORIES } from 'constants/routes'
import { LAT, ESP, ENG } from 'constants/const'
import useStyles from './styles'

const Menu = (props) => {
  const { showCategories } = props
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
                {i18n.texts[languageState?.language].home}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        {showCategories && (
          <ListItem className={classes.listItem} disablePadding>
            <ListItemButton onClick={() => navigate(CATEGORIES)}>
              <ListItemText>
                <Typography color="text.primary" variant="h2">
                  {i18n.texts[languageState?.language].categories}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        {!showCategories && (
          <>
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
          </>
        )}
      </List>
      <Shares />
    </Box>
  )
}

export default Menu

Menu.propTypes = {
  showCategories: PropTypes.bool,
}

Menu.defaultProps = {
  showCategories: false,
}
