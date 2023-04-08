import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Attache = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.0017 19.0042H3C1.89543 19.0042 1 18.1084 1 17.0034V6.99964C1 5.89461 1.89543 4.99881 3 4.99881H17C18.1046 4.99881 19 5.89461 19 6.99964V17.0034C19 18.1084 18.1046 19.0042 17 19.0042H13.9984M6.0017 19.0042V3C6.0017 1.89543 6.89676 1 8.00087 1H11.9992C13.1033 1 13.9984 1.89543 13.9984 3V19.0042M6.0017 19.0042H13.9984"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Attache

Attache.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Attache.defaultProps = {
  color: theme.palette.text.secondary,
  size: 1.5,
}
