import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import AppBar from 'components/AppBar'
import { Arrow } from 'components/Icons'
import { useTheme } from '@mui/material'

const Header = ({ data }) => {
  const theme = useTheme()

  const renderTitle = () => {
    if (data.title) {
      return (
        <Typography
          align="center"
          fontWeight={theme.fontWeight.semibold}
          variant="body1"
        >
          {data.title}
        </Typography>
      )
    }

    return null
  }

  const renderItems = () => {
    if (data.items) {
      return (
        <Stack>
          {data.items.map((item) => (
            <Link key={item} href={item.url}>
              {item.label}
            </Link>
          ))}
        </Stack>
      )
    }

    return null
  }

  return data ? (
    <AppBar className="site-header" position="fixed">
      <Toolbar>
        <Box sx={{ display: 'flex', flexBasis: '25% ' }}>
          <Button
            onClick={data.backUrl}
            sx={{
              minWidth: 0,
              position: 'relative',
            }}
          >
            <Arrow />
          </Button>
        </Box>
        <Box
          sx={{ display: 'flex', flexBasis: '50%', justifyContent: 'center' }}
        >
          {data.icon && renderTitle()}
        </Box>
        <Box
          sx={{ display: 'flex', flexBasis: '25%', justifyContent: 'center' }}
        >
          {renderItems()}
        </Box>
      </Toolbar>
    </AppBar>
  ) : null
}

export default Header

Header.propTypes = {
  data: PropTypes.shape({
    backUrl: PropTypes.string,
    icon: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape()),
    progress: PropTypes.number,
    title: PropTypes.string,
  }),
}

Header.defaultProps = {
  data: null,
}
