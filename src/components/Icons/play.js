import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Play = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 80 80">
    <svg
      fill="none"
      height="79"
      viewBox="0 0 80 79"
      width="80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.918945 39.1826C0.918945 17.5988 18.4161 0.101562 40 0.101562C61.5839 0.101562 79.0811 17.5988 79.0811 39.1826C79.0811 60.7665 61.5839 78.2637 40 78.2637C18.4161 78.2637 0.918945 60.7665 0.918945 39.1826Z"
        fill={color}
        fillOpacity="0.6"
      />
      <path
        clipRule="evenodd"
        d="M69.3108 39.1819V39.1819C69.3108 55.3712 56.1894 68.4927 40 68.4927V68.4927C23.8107 68.4927 10.6892 55.3712 10.6892 39.1819V39.1819C10.6892 22.9926 23.8107 9.87109 40 9.87109V9.87109C56.1894 9.87109 69.3108 22.9926 69.3108 39.1819Z"
        fillRule="evenodd"
        stroke="#FC4C02"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M36.5511 29.602L49.1938 37.0795C50.7929 38.0239 50.7929 40.3395 49.1938 41.284L36.5511 48.7615C34.9227 49.7255 32.8644 48.5498 32.8644 46.6576V31.7058C32.8644 29.8137 34.9227 28.638 36.5511 29.602V29.602Z"
        fillRule="evenodd"
        stroke="#FC4C02"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Play

Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Play.defaultProps = {
  color: theme.palette.black.main,
  size: 1.5,
}
