import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/styles'
import useStyles from './styles'

const Donate = () => {
  const theme = useTheme()
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
              src="images/whatsappicon.png"
              sx={{ height: 48, width: 48 }}
            />
          </Link>
          <Link
            href={`https://www.facebook.com/dialog/share?app_id=1430238181087321&display=popup&href=${encodeURIComponent(
              window.location.origin
            )}&redirect_uri=${encodeURIComponent(window.location.origin)}`}
          >
            <Avatar
              src="images/facebookicon.png"
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
              src="images/twittericon.png"
              sx={{ height: 48, width: 48 }}
            />
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Donate
