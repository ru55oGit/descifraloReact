import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Clothes = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 24 25">
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 3L8.14645 4.64645C8.34171 4.84171 8.34171 5.15829 8.14645 5.35355L6.5 7M17.5 21L15.8536 19.3536C15.6583 19.1583 15.6583 18.8417 15.8536 18.6464L17.5 17M3 7.5V7C3 5.89543 3.89543 5 5 5H8M16 19H19C20.1046 19 21 18.1046 21 17V16.5M16 14H19C20.1046 14 21 13.1046 21 12V5C21 3.89543 20.1046 3 19 3H13C11.8954 3 11 3.89543 11 5V7M5 10H11C12.1046 10 13 10.8954 13 12V19C13 20.1046 12.1046 21 11 21H5C3.89543 21 3 20.1046 3 19V12C3 10.8954 3.89543 10 5 10Z"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Clothes

Clothes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Clothes.defaultProps = {
  color: theme.palette.primary.main,
  size: 1.5,
}
