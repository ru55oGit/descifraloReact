import { useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Categories from '../components/Categories'
import NavBar from '../components/NavBar'
import LevelList from '../components/LevelList'

import useStyles from '../styles/pages'

const IntroPage = () => {
  const classes = useStyles()
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Box className={classes.boxContainer}>
      <NavBar fixed openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Collapse className={classes.menu} in={openMenu}>
        <LevelList />
      </Collapse>
      <Categories />
    </Box>
  )
}

export default IntroPage
