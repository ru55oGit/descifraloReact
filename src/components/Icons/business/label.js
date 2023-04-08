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
        d="M21.0001 8V11.6716C21.0001 12.202 20.7893 12.7107 20.4143 13.0858L14.5001 19M9.92167 18.4718C9.58426 18.8097 9.12638 18.9998 8.64883 19C8.17128 19.0003 7.7132 18.8107 7.37543 18.4731L3.52386 14.6236C3.1861 14.286 2.99634 13.8281 2.99634 13.3505C2.99634 12.873 3.1861 12.415 3.52386 12.0774L10.0189 5.58541C10.3939 5.21055 10.9025 5 11.4328 5H14.9963C16.1009 5 16.9963 5.89543 16.9963 7V10.5585C16.9963 11.0884 16.7861 11.5966 16.4117 11.9716L9.92167 18.4718Z"
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
