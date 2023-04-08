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
        d="M6.89716 20H7.83184C8.82343 20 9.80211 20.2056 10.7438 20.5243C11.4581 20.7659 12.2715 21 12.7429 21C13.8315 21 15.5942 20.5678 16.6742 20.2717C17.2938 20.1018 17.8516 19.7565 18.3051 19.2911C19.1884 18.3844 20.026 17.4543 20.5372 16.9296C21.8262 15.6067 20.1661 13.7007 18.691 14.7821L15.6658 17H12.7429L14.1186 16.9296C14.9853 16.8853 15.6658 16.1512 15.6658 15.2606C15.6658 14.5144 15.1844 13.8584 14.4796 13.6758C13.3526 13.3837 11.6996 13 10.7943 13C9.33289 13 6.89716 15 6.89716 15M6.89716 20V15M6.89716 20C6.89716 20.5523 6.46096 21 5.92287 21H3.97429C3.4362 21 3 20.5523 3 20V14C3 13.4477 3.4362 13 3.97429 13H5.92287C6.46096 13 6.89716 13.4477 6.89716 14V15M14.6915 4.5C14.6915 4.5 13.8191 3 12.7429 3C11.6667 3 10.7943 4 10.7943 5C10.7943 7 14.6915 10 14.6915 10C14.6915 10 18.5886 7 18.5886 5C18.5886 4 17.7162 3 16.6401 3C15.5639 3 14.6915 4.5 14.6915 4.5Z"
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
