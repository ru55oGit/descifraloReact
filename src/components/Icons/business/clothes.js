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
        d="M7 13H3V7.23607C3 6.47852 3.428 5.786 4.10557 5.44721L9 3L12 6L15 3L19.8944 5.44721C20.572 5.786 21 6.47852 21 7.23607V13H17M7 13V21H17V13M7 13V9M17 13V9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
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
