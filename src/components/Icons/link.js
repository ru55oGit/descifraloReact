import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const ChainLink = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 11.0004C10 8.79137 11.791 7.00037 14 7.00037H16.5C18.985 7.00037 21 9.01537 21 11.5004V11.5004C21 13.9854 18.985 16.0004 16.5 16.0004H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M14 12.0004C14 14.2094 12.209 16.0004 10 16.0004H7.5C5.015 16.0004 3 13.9854 3 11.5004V11.5004C3 9.01537 5.015 7.00037 7.5 7.00037H8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default ChainLink

ChainLink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

ChainLink.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
