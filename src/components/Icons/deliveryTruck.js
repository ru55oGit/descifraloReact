import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const DeliveryTruck = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7038 18.2958C19.3228 18.9148 19.3228 19.9178 18.7038 20.5358C18.0848 21.1548 17.0818 21.1548 16.4638 20.5358C15.8448 19.9168 15.8448 18.9138 16.4638 18.2958C17.0828 17.6768 18.0858 17.6768 18.7038 18.2958"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M7.70388 18.2959C8.32288 18.9149 8.32288 19.9179 7.70388 20.5359C7.08488 21.1549 6.08188 21.1549 5.46388 20.5359C4.84588 19.9169 4.84488 18.9139 5.46388 18.2959C6.08288 17.6779 7.08488 17.6769 7.70388 18.2959"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10 4H14C14.552 4 15 4.448 15 5V15H2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M5 19.416H3C2.448 19.416 2 18.968 2 18.416V13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15 7H19.323C19.732 7 20.1 7.249 20.251 7.629L21.857 11.643C21.951 11.879 22 12.131 22 12.385V18.333C22 18.885 21.552 19.333 21 19.333H19.169"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.9999 19.4199H8.16992"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M22 14H18V10H21.2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M2 4H7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M2 7H5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3 10H2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default DeliveryTruck

DeliveryTruck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

DeliveryTruck.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
