import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Stroke = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 22 16"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12V11C4 10.4477 4.44772 10 5 10H9C9.55228 10 10 10.4477 10 11V12M13 5H18M13 8H18M13 11H16M9 6C9 7.10457 8.10457 8 7 8C5.89543 8 5 7.10457 5 6C5 4.89543 5.89543 4 7 4C8.10457 4 9 4.89543 9 6ZM1 3V13C1 14.1046 1.89543 15 3 15H19C20.1046 15 21 14.1046 21 13V3C21 1.89543 20.1046 1 19 1H3C1.89543 1 1 1.89543 1 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Stroke

Stroke.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Stroke.defaultProps = {
  color: theme.palette.black.main,
  size: 1.5,
}
