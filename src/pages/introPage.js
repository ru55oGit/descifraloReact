import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import Carrousel from '../components/Carrousel'
import useStyles from '../styles/pages'
import Language from '../components/Language'

const CategoriesPage = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <Box className={classes.backgroundIntro}>
      <Carrousel />
      <Button
        className={classes.transparentButton}
        onClick={() => navigate('/categorias')}
      >
        <Typography variant="hxl">Jugar</Typography>
      </Button>
      <Language />
    </Box>
  )
}

export default CategoriesPage
