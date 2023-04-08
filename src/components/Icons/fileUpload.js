import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Chart = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path
        clipRule="evenodd"
        d="M0.996216 4.99874C0.996216 2.78868 2.78782 0.99707 4.99788 0.99707H15.002C17.2121 0.99707 19.0037 2.78868 19.0037 4.99874V15.0029C19.0037 17.213 17.2121 19.0046 15.002 19.0046H4.99788C2.78782 19.0046 0.996216 17.213 0.996216 15.0029V4.99874Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10 14.0028L14.5879 9.41492C15.3692 8.63383 16.6358 8.63383 17.4171 9.41492L19.0037 11.0016"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="5.49806"
        cy="5.49867"
        r="1.50063"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M1.34937 16.6477L5.58113 12.4159C6.36245 11.6348 7.62898 11.6348 8.41031 12.4159L14.83 18.8356"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Chart

Chart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Chart.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
