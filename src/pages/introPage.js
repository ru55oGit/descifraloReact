import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import Carrousel from '../components/Carrousel'
import useStyles from '../styles/pages'
import Language from '../components/Language'
import { useLanguageContext } from '../store/language'
import i18n from '../constants/i18n.json'

const CategoriesPage = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { languageState } = useLanguageContext()

  return (
    <Box className={classes.backgroundIntro}>
      <Carrousel />
      <Button
        className={classes.transparentButton}
        onClick={() => navigate('/categorias')}
      >
        <Typography variant="hxl">
          {i18n.texts[languageState?.language].play}
        </Typography>
      </Button>
      <Language />
    </Box>
  )
}

export default CategoriesPage
