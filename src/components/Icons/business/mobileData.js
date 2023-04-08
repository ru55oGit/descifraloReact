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
        d="M14.0001 9.00012V15.0001L16.0001 13.0001M10.0001 15.0001V9.00012L8.00006 11.0001M21.0038 12.0001C21.0038 16.9727 16.9727 21.0038 12.0001 21.0038C7.02745 21.0038 2.99634 16.9727 2.99634 12.0001C2.99634 7.02745 7.02745 2.99634 12.0001 2.99634C16.9727 2.99634 21.0038 7.02745 21.0038 12.0001Z"
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
