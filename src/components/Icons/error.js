import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const ErrorIcon = ({ color }) => (
  <SvgIcon viewBox="0 0 20 20">
    <svg
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.999 14C9.861 14 9.749 14.112 9.75 14.25C9.75 14.388 9.862 14.5 10 14.5C10.138 14.5 10.25 14.388 10.25 14.25C10.25 14.112 10.138 14 9.999 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M5.414 18.414L1.586 14.586C1.211 14.211 1 13.702 1 13.172V6.828C1 6.298 1.211 5.789 1.586 5.414L5.414 1.586C5.789 1.211 6.298 1 6.828 1H13.171C13.701 1 14.21 1.211 14.585 1.586L18.413 5.414C18.789 5.789 19 6.298 19 6.828V13.171C19 13.701 18.789 14.21 18.414 14.585L14 19H6.828C6.298 19 5.789 18.789 5.414 18.414V18.414Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10 10.5V5.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default ErrorIcon

ErrorIcon.propTypes = {
  color: PropTypes.string,
}

ErrorIcon.defaultProps = {
  color: theme.palette.error.main,
}
