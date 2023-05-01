import { Paper as MuiPaper } from '@mui/material'
import { styled } from '@mui/material/styles'

const Paper = styled(MuiPaper)(({ theme }) => ({
  border: `1px solid ${theme.backgrounds[2]}`,
  borderRadius: theme.space[3],
  padding: theme.space[2],
}))

export default Paper
