import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Copy = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 18H18C19.1046 18 20 17.1046 20 16V5C20 3.89543 19.1046 3 18 3H9C7.89543 3 7 3.89543 7 5V7"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M15.3593 9.47041L13.5296 7.6407C13.1194 7.23047 12.563 7 11.9828 7H6C4.89543 7 4 7.89543 4 9V19C4 20.1046 4.89543 21 6 21H14C15.1046 21 16 20.1046 16 19V11.0172C16 10.437 15.7695 9.88065 15.3593 9.47041Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M16 11.5H13C12.1716 11.5 11.5 10.8284 11.5 10V7"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Copy

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Copy.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
