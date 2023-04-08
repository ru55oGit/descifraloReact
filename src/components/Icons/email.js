import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Email = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M19 18.9813H5C3.895 18.9813 3 18.0863 3 16.9813V7.01929C3 5.91429 3.895 5.01929 5 5.01929H19C20.105 5.01929 21 5.91429 21 7.01929V16.9823C21 18.0863 20.105 18.9813 19 18.9813V18.9813Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17 9.00024L12 12.0002L7 9.00024"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Email

Email.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Email.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
