import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const EditPen = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1751 9.17559L14.8257 5.82617"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M20 13.0005V15.0005C20 16.3266 19.4732 17.5983 18.5355 18.536C17.5979 19.4737 16.3261 20.0005 15 20.0005H9C7.67392 20.0005 6.40215 19.4737 5.46447 18.536C4.52678 17.5983 4 16.3266 4 15.0005V9.00049C4 7.67441 4.52678 6.40264 5.46447 5.46495C6.40215 4.52727 7.67392 4.00049 9 4.00049H11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12.6651 14.0018H10.9998C10.7345 14.0018 10.4802 13.8965 10.2926 13.7089C10.1051 13.5214 9.99976 13.267 9.99976 13.0018V11.3349C9.99976 11.1182 10.0424 10.9036 10.1254 10.7034C10.2083 10.5032 10.3299 10.3213 10.4831 10.1681L15.9568 4.69545C16.4009 4.25133 17.0033 4.00183 17.6314 4.00183C18.2595 4.00183 18.8619 4.25133 19.3061 4.69545V4.69545C19.526 4.91537 19.7005 5.17647 19.8195 5.46382C19.9385 5.75117 19.9998 6.05916 19.9998 6.37019C19.9998 6.68123 19.9385 6.98921 19.8195 7.27657C19.7005 7.56392 19.526 7.82502 19.3061 8.04494L13.8318 13.5186C13.5223 13.828 13.1026 14.0018 12.6651 14.0018V14.0018Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default EditPen

EditPen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

EditPen.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
