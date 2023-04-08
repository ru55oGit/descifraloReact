import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const MenuArrow = ({ color, rotate, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem`, transform: `rotate(${rotate}deg)` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 16L10.5 12L6.5 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12.5 17L17.5 12L12.5 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default MenuArrow

MenuArrow.propTypes = {
  color: PropTypes.string,
  rotate: PropTypes.number,
  size: PropTypes.number,
}

MenuArrow.defaultProps = {
  color: theme.palette.text.primary,
  rotate: 0,
  size: 1.5,
}
