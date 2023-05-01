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

const LevelList = () => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <Box className={classes.listContainer}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <Typography color="text.primary" variant="h2">
                Nivel
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Stack sx={{ backgroundColor: theme.palette.divider }}>
        <Typography sx={{ textAlign: 'center' }} variant="h1">
          Idioma/Language
        </Typography>
        <Stack direction="row" sx={{ justifyContent: 'space-evenly', mt: 2 }}>
          <Stack sx={{ alignItems: 'center', display: 'flex' }}>
            <Avatar
              src="images/argentina.svg"
              sx={{ height: 24, width: 36 }}
              variant="square"
            />
            <Typography>Latino</Typography>
          </Stack>
          <Stack sx={{ alignItems: 'center', display: 'flex' }}>
            <Avatar
              src="images/espania.svg"
              sx={{ height: 24, width: 36 }}
              variant="square"
            />
            <Typography>Español</Typography>
          </Stack>
          <Stack sx={{ alignItems: 'center', display: 'flex' }}>
            <Avatar
              src="images/usa.svg"
              sx={{ height: 24, width: 36 }}
              variant="square"
            />
            <Typography>English</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default LevelList
