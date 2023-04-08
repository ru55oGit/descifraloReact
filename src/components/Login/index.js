import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import useStyles from './styles'

const Login = () => {
  const classes = useStyles()

  return (
    <Stack className={classes.boxContainer}>
      <TextField label="Usuario" />
      <TextField
        autoComplete="current-password"
        label="Contraseña"
        type="password"
      />
    </Stack>
  )
}

export default Login
