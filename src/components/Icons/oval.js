import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Oval = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 16L6.44721 15.1056C6.786 14.428 7.47852 14 8.23607 14H13.7639C14.5215 14 15.214 14.428 15.5528 15.1056L16 16M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM11 6C9.34315 6 8 7.34315 8 9C8 10.6569 9.34315 12 11 12C12.6569 12 14 10.6569 14 9C14 7.34315 12.6569 6 11 6Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Oval

Oval.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Oval.defaultProps = {
  color: theme.palette.black.main,
  size: 1.5,
}
