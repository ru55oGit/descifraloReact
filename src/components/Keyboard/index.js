import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import useStyles from './styles'

const Keyboard = () => {
  const classes = useStyles()

  return (
    <Box className={classes.keyboardContainer}>
      <Stack direction="row">
        <Button className={classes.button}>Q</Button>
        <Button className={classes.button}>W</Button>
        <Button className={classes.button}>E</Button>
        <Button className={classes.button}>R</Button>
        <Button className={classes.button}>T</Button>
        <Button className={classes.button}>Y</Button>
        <Button className={classes.button}>U</Button>
        <Button className={classes.button}>I</Button>
        <Button className={classes.button}>O</Button>
        <Button className={classes.button}>P</Button>
      </Stack>
      <Stack direction="row">
        <Button className={classes.button}>A</Button>
        <Button className={classes.button}>S</Button>
        <Button className={classes.button}>D</Button>
        <Button className={classes.button}>F</Button>
        <Button className={classes.button}>G</Button>
        <Button className={classes.button}>H</Button>
        <Button className={classes.button}>J</Button>
        <Button className={classes.button}>K</Button>
        <Button className={classes.button}>L</Button>
        <Button className={classes.button}>Ñ</Button>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Button className={classes.button}>Z</Button>
        <Button className={classes.button}>X</Button>
        <Button className={classes.button}>C</Button>
        <Button className={classes.button}>V</Button>
        <Button className={classes.button}>B</Button>
        <Button className={classes.button}>N</Button>
        <Button className={classes.button}>M</Button>
      </Stack>
    </Box>
  )
}

export default Keyboard
