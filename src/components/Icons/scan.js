import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Scan = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 24 25">
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9991 8.44444V5.77778C19.9991 4.79556 19.2036 4 18.2214 4H15.5547"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.44444 4H5.77778C4.79556 4 4 4.79556 4 5.77778V8.44444"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4 15.5547V18.2214C4 19.2036 4.79556 19.9991 5.77778 19.9991H8.44444"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.5547 19.9991H18.2214C19.2036 19.9991 19.9991 19.2036 19.9991 18.2214V15.5547"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4 12H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Scan

Scan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Scan.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
