import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Arrow = ({ color, rotate, size }) => (
  <SvgIcon
    sx={{ fontSize: `${size}rem`, transform: `rotate(${rotate}deg)` }}
    viewBox="0 0 17 14"
  >
    <svg
      fill="none"
      height="14"
      viewBox="0 0 17 14"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.01001 6.98047H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M7.01295 0.988281L1.00195 7.00028L7.01295 13.0123"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Arrow

Arrow.propTypes = {
  color: PropTypes.string,
  rotate: PropTypes.number,
  size: PropTypes.number,
}

Arrow.defaultProps = {
  color: theme.palette.text.primary,
  rotate: 0,
  size: 1.5,
}
