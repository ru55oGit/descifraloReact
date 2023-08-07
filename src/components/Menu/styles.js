import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  listContainer: {
    backgroundColor: theme.palette.white.main,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    height: 'auto',
    maxWidth: 'calc(414px + 16px)',
    width: '100vw',
  },
  listItem: {
    '&:nth-child(even)': {
      backgroundColor: theme.palette.divider,
    },
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
}))

export default useStyles
