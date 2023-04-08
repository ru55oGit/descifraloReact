import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'

const TickSuccess = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 24 25">
    <svg
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={color} height="18" rx="9" width="18" x="1" y="1" />
      <path
        clipRule="evenodd"
        d="M13.7154 7.23079C14.0729 7.55847 14.097 8.1139 13.7693 8.47137L9.47665 13.1543C9.31482 13.3308 9.0879 13.4336 8.84846 13.4388C8.60903 13.444 8.37786 13.3512 8.20851 13.1818L6.2573 11.2306C5.9144 10.8877 5.9144 10.3318 6.2573 9.98888C6.6002 9.64598 7.15615 9.64598 7.49904 9.98888L8.80181 11.2916L12.4748 7.28473C12.8025 6.92726 13.3579 6.90311 13.7154 7.23079Z"
        fill="white"
        fillRule="evenodd"
      />
      <rect
        height="18"
        rx="9"
        stroke="white"
        strokeWidth="2"
        width="18"
        x="1"
        y="1"
      />
    </svg>
  </SvgIcon>
)

export default TickSuccess

TickSuccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

TickSuccess.defaultProps = {
  color: '#2D9F70',
  size: 1.5,
}
