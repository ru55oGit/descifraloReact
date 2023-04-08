import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Plus = ({ color, rotate, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem`, transform: `rotate(${rotate}deg)` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6V18.0001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M18 12H5.99996"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Plus

Plus.propTypes = {
  color: PropTypes.string,
  rotate: PropTypes.number,
  size: PropTypes.number,
}

Plus.defaultProps = {
  color: theme.palette.primary.main,
  rotate: 0,
  size: 1.5,
}
