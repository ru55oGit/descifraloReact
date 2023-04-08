import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const LinkExt = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 3H21V8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M14 10L21 3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M19 14V19C19 20.105 18.105 21 17 21H5C3.895 21 3 20.105 3 19V7C3 5.895 3.895 5 5 5H10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default LinkExt

LinkExt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

LinkExt.defaultProps = {
  color: theme.palette.primary.main,
  size: 1.5,
}
