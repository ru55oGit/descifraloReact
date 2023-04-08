import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const NoteList = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="20"
      viewBox="0 0 18 20"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 6.00098V17.001C17 18.1055 16.1046 19.001 15 19.001H3C1.89543 19.001 1 18.1055 1 17.001V3.00098C1 1.89641 1.89543 1.00098 3 1.00098H12M17 6.00098C17 5.47054 16.7893 4.79026 16.4142 4.41519L13.5858 1.58676C13.2107 1.21169 12.5304 1.00098 12 1.00098M17 6.00098H14C12.8954 6.00098 12 5.10555 12 4.00098V1.00098M5 8.00098H7M5 11.001H13M5 14.001H13"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default NoteList

NoteList.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

NoteList.defaultProps = {
  color: theme.palette.text.secondary,
  size: 1.5,
}
