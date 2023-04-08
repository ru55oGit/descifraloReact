import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Chevron = ({ color, rotate, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem`, transform: `rotate(${rotate}deg)` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 16L14 12L10 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Chevron

Chevron.propTypes = {
  color: PropTypes.string,
  rotate: PropTypes.number,
  size: PropTypes.number,
}

Chevron.defaultProps = {
  color: theme.palette.text.primary,
  rotate: 0,
  size: 1.5,
}
