import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const AddProduct = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 24 25">
    <svg
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9116_53802)">
        <path
          d="M17.5 21C19.709 21 21.5 19.209 21.5 17V14V7C21.5 4.791 19.709 3 17.5 3H7.5C5.291 3 3.5 4.791 3.5 7V17C3.5 19.209 5.291 21 7.5 21H17.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M21.5 10H13.5C11.843 10 10.5 11.343 10.5 13V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M14.5 15.5H17.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M16 17V14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_9116_53802">
          <rect
            fill="white"
            height="24"
            transform="translate(0.5)"
            width="24"
          />
        </clipPath>
      </defs>
    </svg>
  </SvgIcon>
)

export default AddProduct

AddProduct.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

AddProduct.defaultProps = {
  color: theme.palette.primary.main,
  size: 1.5,
}
