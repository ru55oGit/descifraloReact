import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Help = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 24 25">
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15.9985H12.03M12 13.4985C12 11.4985 14 11.9985 14 9.99854C14 7.99854 12 7.99854 12 7.99854C12 7.99854 10 7.99854 10 9.99854M21 11.9985C21 16.9691 16.9706 20.9985 12 20.9985C7.02944 20.9985 3 16.9691 3 11.9985C3 7.02797 7.02944 2.99854 12 2.99854C16.9706 2.99854 21 7.02797 21 11.9985Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Help

Help.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Help.defaultProps = {
  color: theme.palette.primary.main,
  size: 1.5,
}
