import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const DownloadSave = ({ color, rotate }) => (
  <SvgIcon sx={{ transform: `rotate(${rotate}deg)` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 11.8199L12 14.8199L9 11.8199"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.999 3.946C18.96 5.42 21 8.468 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 11.999 3V14.828"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default DownloadSave

DownloadSave.propTypes = {
  color: PropTypes.string,
  rotate: PropTypes.number,
}

DownloadSave.defaultProps = {
  color: theme.palette.text.primary,
  rotate: 0,
}
