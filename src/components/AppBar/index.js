import { AppBar as MuiAppbar } from '@mui/material'
import { styled } from '@mui/material/styles'

const AppBar = styled(MuiAppbar, {
  name: 'MuiAppBar',
  slot: 'Root',
})(({ theme }) => ({
  '& .MuiToolbar-root': {
    justifyContent: 'space-between',
  },
  backgroundColor: theme.backgrounds[1],
  boxShadow: 'none',
}))

export default AppBar
