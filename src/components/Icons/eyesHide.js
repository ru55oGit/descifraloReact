import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Eyes = ({ color }) => (
  <SvgIcon>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 30 30"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6521 12.3499C19.1159 13.8137 19.1159 16.1899 17.6521 17.6562C16.1884 19.1199 13.8121 19.1199 12.3459 17.6562C10.8821 16.1924 10.8821 13.8162 12.3459 12.3499C13.8121 10.8837 16.1871 10.8837 17.6521 12.3499"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15 23.75C10.3863 23.75 6.20125 21.2612 4.3075 17.39V17.39C3.94 16.6387 3.75 15.8237 3.75 15C3.75 14.1763 3.94 13.3612 4.3075 12.61V12.61C6.20125 8.73875 10.3863 6.25 15 6.25C19.6137 6.25 23.7988 8.73875 25.6925 12.61V12.61C26.06 13.3612 26.25 14.1763 26.25 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M25 20L21.25 23.75"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M21.25 20L25 23.75"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Eyes

Eyes.propTypes = {
  color: PropTypes.string,
}

Eyes.defaultProps = {
  color: theme.palette.text.primary,
}
