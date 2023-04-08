import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const ChainLink = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33301 6.66789H4.66634C3.92967 6.66789 3.33301 7.26455 3.33301 8.00122V12.6679C3.33301 13.4046 3.92967 14.0012 4.66634 14.0012H11.333C12.0697 14.0012 12.6663 13.4046 12.6663 12.6679V8.00122C12.6663 7.26455 12.0697 6.66789 11.333 6.66789H10.6663M5.33301 6.66789V4.66764C5.33301 4.66764 5.33301 2.00098 7.99967 2.00098C10.6663 2.00098 10.6663 4.66764 10.6663 4.66764V6.66789M5.33301 6.66789H10.6663"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  </SvgIcon>
)

export default ChainLink

ChainLink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

ChainLink.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
