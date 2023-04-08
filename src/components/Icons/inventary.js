import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Inventary = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 24 25">
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M20.9262 16.0007V8.00266C20.9262 7.28766 20.5452 6.62766 19.9262 6.27066L13.0002 2.27166C12.3812 1.91466 11.6192 1.91466 11.0002 2.27166L4.07422 6.27066C3.45522 6.62766 3.07422 7.28866 3.07422 8.00266V15.9997C3.07422 16.7147 3.45522 17.3747 4.07422 17.7317L11.0002 21.7317C11.6192 22.0887 12.3812 22.0887 13.0002 21.7317L19.9262 17.7327C20.5452 17.3757 20.9262 16.7147 20.9262 16.0007Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.17188 12.6328L9.17188 14.3728"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.34375 7.00391L12.0017 12.0029L20.6597 7.00391"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12 22V12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M16.3291 9.50344L7.53906 4.27344"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Inventary

Inventary.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Inventary.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
