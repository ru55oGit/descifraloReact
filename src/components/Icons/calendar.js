import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Calendar = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2.00024V6.00024"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8 2.00024V6.00024"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3 9.00024H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M19 4.00024H5C3.895 4.00024 3 4.89524 3 6.00024V19.0002C3 20.1052 3.895 21.0002 5 21.0002H19C20.105 21.0002 21 20.1052 21 19.0002V6.00024C21 4.89524 20.105 4.00024 19 4.00024Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Calendar

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Calendar.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
