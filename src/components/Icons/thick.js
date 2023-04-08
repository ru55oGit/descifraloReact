import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Thick = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 8 8"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M7.71539 0.230797C8.07286 0.558477 8.09701 1.1139 7.76933 1.47137L3.47665 6.1543C3.31482 6.33084 3.0879 6.43362 2.84846 6.43882C2.60903 6.44402 2.37786 6.3512 2.20851 6.18185L0.257296 4.23063C-0.0856027 3.88773 -0.0856027 3.33178 0.257297 2.98889C0.600196 2.64599 1.15615 2.64599 1.49904 2.98889L2.80181 4.29165L6.47481 0.284735C6.80249 -0.0727355 7.35792 -0.0968844 7.71539 0.230797Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  </SvgIcon>
)

export default Thick

Thick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Thick.defaultProps = {
  color: theme.palette.white.main,
  size: 1.5,
}
