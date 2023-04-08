import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Facebook = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M11.1 12.8999H16.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M16.5 8.3999H15.555C14.089 8.3999 12.9 9.5889 12.9 11.0549V11.9999V20.9999"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Facebook

Facebook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Facebook.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
