import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const DoneCheckCircle = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.228 11.222L12.005 15L19.68 7.325C18.1 4.735 15.256 3 12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21C16.632 21 20.443 17.5 20.941 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default DoneCheckCircle

DoneCheckCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

DoneCheckCircle.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
