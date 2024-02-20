import { useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Categories2 from 'components/Categories2'
import NavBar from 'components/NavBar'
import Menu from 'components/Menu'
import useStyles from 'styles/pages'

const CategoriesPage = () => {
  const classes = useStyles()
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Box className={classes.boxContainer}>
      <NavBar fixed openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Collapse className={classes.menu} in={openMenu}>
        <Menu />
      </Collapse>
      {openMenu && (
        <Box className={classes.modal} onClick={() => setOpenMenu(false)} />
      )}
      {!openMenu && <Categories2 />}
    </Box>
  )
}

export default CategoriesPage
