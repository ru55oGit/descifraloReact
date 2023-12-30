import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from 'react-router-dom'
import Language from '../Language'
import { HOME } from '../../constants/routes'
import useStyles from './styles'

const Menu = () => {
  const classes = useStyles()
  const navigate = useNavigate()

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
            <ListItemText>
              <Typography color="text.primary" variant="h2">
                Niños
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Language showTitle />
    </Box>
  )
}

export default Menu
