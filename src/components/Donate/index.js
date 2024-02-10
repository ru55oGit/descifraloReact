import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import useStyles from './styles'

const Donate = () => {
  const classes = useStyles()

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
    </Box>
  )
}

export default Donate
