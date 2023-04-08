import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Warning = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 13.1202V9.38025"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M11.999 16.1254C11.861 16.1254 11.749 16.2374 11.75 16.3754C11.75 16.5134 11.862 16.6254 12 16.6254C12.138 16.6254 12.25 16.5134 12.25 16.3754C12.25 16.2374 12.138 16.1254 11.999 16.1254"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M14.029 4.13931L21.688 17.5433C22.578 19.1013 21.453 21.0403 19.659 21.0403H4.34101C2.54601 21.0403 1.42101 19.1013 2.31201 17.5433L9.97101 4.13931C10.868 2.56831 13.132 2.56831 14.029 4.13931Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Warning

Warning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Warning.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
