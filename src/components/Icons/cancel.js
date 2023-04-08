import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Cancel = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 24 24">
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9.25" stroke={color} strokeWidth="1.5" />
      <path d="M5.5 5.5L18.5 18.5" stroke={color} strokeWidth="1.5" />
    </svg>
  </SvgIcon>
)

export default Cancel

Cancel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Cancel.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
