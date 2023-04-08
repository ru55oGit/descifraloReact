import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const ShopStore = ({ color }) => (
  <SvgIcon>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.21997 10.89V20.89"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M19.78 10.89V20.89"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M14.222 20.889V16.445C14.222 15.218 13.227 14.223 12 14.223C10.773 14.223 9.77802 15.218 9.77802 16.445V20.889"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M2 20.89H22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M4.30101 10.889C2.60301 10.877 1.49601 9.19596 2.23201 7.74696L3.94701 4.36996C4.33801 3.59996 5.16001 3.11096 6.06201 3.11096H17.938C18.84 3.11096 19.662 3.59996 20.053 4.36996L21.769 7.74696C22.505 9.19596 21.398 10.877 19.7 10.889C18.283 10.889 17.134 9.92096 17.134 8.72596V8.67796C17.134 9.89896 15.985 10.889 14.568 10.889C13.151 10.889 12.002 9.89896 12.002 8.67796C12.002 9.89896 10.853 10.889 9.43601 10.889C8.01901 10.889 6.87001 9.89896 6.87001 8.67796V8.72596C6.86701 9.92096 5.71801 10.889 4.30101 10.889Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default ShopStore

ShopStore.propTypes = {
  color: PropTypes.string,
}

ShopStore.defaultProps = {
  color: theme.palette.text.primary,
}
