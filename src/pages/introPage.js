import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

import useStyles from '../styles/pages'

const CategoriesPage = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <Box className={classes.boxContainer}>
      <Button onClick={() => navigate('/categorias')}>Jugar</Button>
    </Box>
  )
}

export default CategoriesPage
