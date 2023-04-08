import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const AddProductExist = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 24 25">
    <svg
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5028 8.99859V4.99693C19.5028 3.8919 18.607 2.99609 17.5019 2.99609H5.49693C4.3919 2.99609 3.49609 3.8919 3.49609 4.99693V19.0028C3.49609 20.1078 4.3919 21.0036 5.49693 21.0036H9.49859"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M13.5002 16.1523V21.0053"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M21.5041 21.0053V16.1523"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17.5022 21.0047V19.0039"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M13.0195 21.0041H21.9833"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M14.0163 16.2442V16.2442C13.4893 16.2436 13.0003 15.9696 12.7245 15.5205C12.4487 15.0714 12.4255 14.5113 12.6633 14.041L13.3223 12.7391C13.5522 12.2865 14.0164 12.001 14.524 12H20.4768C20.9853 11.9997 21.4509 12.2849 21.6816 12.7381L22.3405 14.04C22.5783 14.5103 22.5552 15.0704 22.2794 15.5195C22.0036 15.9686 21.5146 16.2426 20.9875 16.2432C20.24 16.2434 19.5754 15.7673 19.3351 15.0595C19.3191 15.0232 19.2832 14.9997 19.2435 14.9997C19.2038 14.9997 19.1678 15.0232 19.1518 15.0595C18.9118 15.7671 18.2477 16.2432 17.5004 16.2432C16.7532 16.2432 16.089 15.7671 15.849 15.0595C15.833 15.0232 15.797 14.9997 15.7574 14.9997C15.7177 14.9997 15.6817 15.0232 15.6657 15.0595C15.4251 15.7672 14.7607 16.2431 14.0133 16.2432"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.49805 11.0003L10.9987 11.0002"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.49805 6.9963H15.5005"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.49826 15.1253C6.56732 15.1253 6.62331 15.0693 6.62331 15.0002C6.62331 14.9311 6.56732 14.8752 6.49826 14.8752C6.42919 14.8752 6.3732 14.9311 6.3732 15.0002C6.3732 15.0693 6.42919 15.1253 6.49826 15.1253"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.49815 15.0002H9.99836"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.49826 11.1253C6.56732 11.1253 6.62331 11.0693 6.62331 11.0002C6.62331 10.9311 6.56732 10.8752 6.49826 10.8752C6.42919 10.8752 6.3732 10.9311 6.3732 11.0002C6.3732 11.0693 6.42919 11.1253 6.49826 11.1253"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.49826 7.12135C6.56732 7.12135 6.62331 7.06537 6.62331 6.9963C6.62331 6.92724 6.56732 6.87125 6.49826 6.87125C6.42919 6.87125 6.3732 6.92724 6.3732 6.9963C6.3732 7.06537 6.42919 7.12135 6.49826 7.12135"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default AddProductExist

AddProductExist.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

AddProductExist.defaultProps = {
  color: theme.palette.primary.main,
  size: 1.5,
}
