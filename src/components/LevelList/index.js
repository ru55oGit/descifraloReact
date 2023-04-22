import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/styles'

const LevelList = ({ cant, setLevel, setOpen }) => {
  const theme = useTheme()

  const handleClick = (i) => {
    setLevel(i + 1)
    setOpen(false)
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.white.main,
        display: 'flex',
        justifyContent: 'center',
        maxHeight: '80vh',
        width: '35vw',
      }}
    >
      <List sx={{ width: '100%' }}>
        {Array.from({ length: cant }, (e, index) => (
          <>
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleClick(index)}>
                <ListItemText>
                  <Typography color="text.primary" variant="h2">
                    Nivel {index + 1}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider
              sx={{
                borderColor: theme.palette.text.primary,
                borderWidth: '0.2px',
              }}
            />
          </>
        ))}
      </List>
    </Box>
  )
}

export default LevelList

LevelList.propTypes = {
  cant: PropTypes.number.isRequired,
  setLevel: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
}
