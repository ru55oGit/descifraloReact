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
        d="M14.5 10C14.5 8 12 8 12 8M9.5 14C9.5 16 12 16 12 16M12 16C12 16 14.5 16 14.5 14C14.5 11 9.5 13 9.5 10C9.5 8 12 8 12 8M12 16V17M12 8V7M4.20321 16.5C4.58835 17.1663 5.06596 17.7939 5.63604 18.3639C9.15074 21.8787 14.8492 21.8787 18.3639 18.3639C21.8787 14.8492 21.8787 9.15076 18.3639 5.63604C16.6066 3.87868 14.3033 3 12 3C11.4981 3 10.9962 3.04172 10.5 3.12516M3.05539 13C2.96296 12.1684 2.98621 11.3264 3.12515 10.5M4.87485 6.5C5.10702 6.20002 5.36075 5.91133 5.63604 5.63604C5.91133 5.36075 6.20002 5.10702 6.5 4.87486"
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
