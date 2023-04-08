import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Chart = ({ color }) => (
  <SvgIcon>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M21 12.0005V12.0005C21 16.9715 16.971 21.0005 12 21.0005V21.0005C7.029 21.0005 3 16.9715 3 12.0005V12.0005C3 7.02949 7.029 3.00049 12 3.00049V3.00049C16.971 3.00049 21 7.02949 21 12.0005Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M18.364 18.3645L12.293 12.2935C12.105 12.1055 12 11.8515 12 11.5865V3.00049"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12.07 11.9605L19.79 7.50049"
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
}

Chart.defaultProps = {
  color: theme.palette.text.primary,
}
