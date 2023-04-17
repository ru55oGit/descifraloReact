import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/styles'

const LevelList = ({ cant, setLevel }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.white.main,
        display: 'flex',
        justifyContent: 'center',
        width: '80vw',
      }}
    >
      <List>
        {Array.from({ length: cant }, (e, index) => (
          <ListItem key={index} component="div" disablePadding>
            <ListItemButton onClick={() => setLevel(index + 1)}>
              <ListItemText primary={`Nivel ${index + 1}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default LevelList

LevelList.propTypes = {
  cant: PropTypes.number.isRequired,
  setLevel: PropTypes.func.isRequired,
}
