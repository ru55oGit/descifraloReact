import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Sale = ({ color }) => (
  <SvgIcon>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M20.926 15.9988V8.00083C20.926 7.28583 20.545 6.62583 19.926 6.26883L13 2.26983C12.381 1.91283 11.619 1.91283 11 2.26983L4.07397 6.26883C3.45497 6.62583 3.07397 7.28683 3.07397 8.00083V15.9978C3.07397 16.7128 3.45497 17.3728 4.07397 17.7298L11 21.7298C11.619 22.0868 12.381 22.0868 13 21.7298L19.926 17.7308C20.545 17.3738 20.926 16.7128 20.926 15.9988Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.16992 12.6298L9.16992 14.3698"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.34204 7.00085L12 11.9999L20.658 7.00085"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12 21.9999V11.9999"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M16.33 9.4999L7.54004 4.2699"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Sale

Sale.propTypes = {
  color: PropTypes.string,
}

Sale.defaultProps = {
  color: theme.palette.info.dark,
}
