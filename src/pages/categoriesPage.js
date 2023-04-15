import Box from '@mui/material/Box'
import Categories from '../components/Categories'
import useStyles from '../styles/categoriesStyles'

const IntroPage = () => {
  const classes = useStyles()

  return (
    <Box className={classes.boxContainer}>
      <Categories />
    </Box>
  )
}

export default IntroPage
