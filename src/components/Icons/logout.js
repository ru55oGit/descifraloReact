import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Logout = ({ color, rotate, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem`, transform: `rotate(${rotate}deg)` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 12.0005H3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.94702 16.0005C5.42002 18.9615 8.46802 21.0005 12 21.0005C16.971 21.0005 21 16.9715 21 12.0005C21 7.02949 16.971 3.00049 12 3.00049C8.46802 3.00049 5.42002 5.03949 3.94702 8.00049"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12 9.00049L15 12.0005L12 15.0005"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Logout

Logout.propTypes = {
  color: PropTypes.string,
  rotate: PropTypes.number,
  size: PropTypes.number,
}

Logout.defaultProps = {
  color: theme.palette.text.primary,
  rotate: 0,
  size: 1.5,
}
