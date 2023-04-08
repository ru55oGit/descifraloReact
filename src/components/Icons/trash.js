import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Trash = ({ color, size }) => (
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
        d="M15.5438 21.0041H8.45795C7.28176 21.0041 6.30386 20.0986 6.21365 18.9258L5.24805 6.37305H18.7537L17.7881 18.9258C17.6979 20.0986 16.72 21.0041 15.5438 21.0041V21.0041Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M20.0037 6.37326H3.99707"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M9.18699 2.99707H14.8143C15.4359 2.99707 15.9398 3.50096 15.9398 4.12254V6.37348H8.06152V4.12254C8.06152 3.50096 8.56541 2.99707 9.18699 2.99707Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M13.9699 10.875V16.5023"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.0305 10.875V16.5023"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Trash

Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Trash.defaultProps = {
  color: theme.palette.primary.main,
  size: 1.5,
}
