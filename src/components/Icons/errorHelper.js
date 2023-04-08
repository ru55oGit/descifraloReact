import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const ErrorHelper = ({ color, size, ml }) => (
  <SvgIcon sx={{ fontSize: `${size}rem`, ml }} viewBox="0 0 12 12">
    <svg
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" fill={color} r="6" />
      <path
        d="M6.03286 8.66667C5.94086 8.66667 5.8662 8.74133 5.86686 8.83333C5.86686 8.92533 5.94153 9 6.03353 9C6.12553 9 6.2002 8.92533 6.2002 8.83333C6.2002 8.74133 6.12553 8.66667 6.03286 8.66667"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.03353 6.33333V3"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SvgIcon>
)

export default ErrorHelper

ErrorHelper.propTypes = {
  color: PropTypes.string,
  ml: PropTypes.string,
  size: PropTypes.number,
}

ErrorHelper.defaultProps = {
  color: theme.palette.error.main,
  ml: 2,
  size: 0.75,
}
