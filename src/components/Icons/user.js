import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const User = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20.0004V19.2504C20 18.1232 19.5522 17.0422 18.7552 16.2452C17.9582 15.4481 16.8772 15.0004 15.75 15.0004H8.25C7.12283 15.0004 6.04183 15.4481 5.2448 16.2452C4.44777 17.0422 4 18.1232 4 19.2504V20.0004"
        stroke="#5E5F73"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12 11.0004C14.2091 11.0004 16 9.20951 16 7.00037C16 4.79123 14.2091 3.00037 12 3.00037C9.79086 3.00037 8 4.79123 8 7.00037C8 9.20951 9.79086 11.0004 12 11.0004Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default User

User.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

User.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
