import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Dots = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.491 16.9995C11.6661 16.9995 10.9911 17.6745 11.0001 18.4995C11.0001 19.3245 11.6751 19.9995 12.5 19.9995C13.325 19.9995 14 19.3245 14 18.4995C14 17.6745 13.325 16.9995 12.491 16.9995Z"
        fill={color}
      />
      <path
        d="M12.491 10.9995C11.6661 10.9995 10.9911 11.6745 11.0001 12.4995C11.0001 13.3245 11.6751 13.9995 12.5 13.9995C13.325 13.9995 14 13.3245 14 12.4995C14 11.6745 13.325 10.9995 12.491 10.9995Z"
        fill={color}
      />
      <path
        d="M12.491 4.99951C11.6661 4.99951 10.9911 5.67451 11.0001 6.49951C11.0001 7.32451 11.6751 7.99951 12.5 7.99951C13.325 7.99951 14 7.32451 14 6.49951C14 5.67451 13.325 4.99951 12.491 4.99951Z"
        fill={color}
      />
    </svg>
  </SvgIcon>
)

export default Dots

Dots.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Dots.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
