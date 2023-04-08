import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const CheckMark = ({ color }) => (
  <SvgIcon viewBox="0 0 18 18">
    <svg
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 7L8 12L5 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M15 17H3C1.895 17 1 16.105 1 15V3C1 1.895 1.895 1 3 1H15C16.105 1 17 1.895 17 3V15C17 16.105 16.105 17 15 17Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default CheckMark

CheckMark.propTypes = {
  color: PropTypes.string,
}

CheckMark.defaultProps = {
  color: theme.palette.success.main,
}
