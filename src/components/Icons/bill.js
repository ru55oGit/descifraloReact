import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Bill = ({ color }) => (
  <SvgIcon>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7678 10.2322C14.7441 11.2085 14.7441 12.7915 13.7678 13.7678C12.7915 14.7441 11.2085 14.7441 10.2322 13.7678C9.25592 12.7915 9.25592 11.2085 10.2322 10.2322C11.2085 9.25592 12.7915 9.25592 13.7678 10.2322Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M20 18.667H4C2.895 18.667 2 17.772 2 16.667V7.33301C2 6.22801 2.895 5.33301 4 5.33301H20C21.105 5.33301 22 6.22801 22 7.33301V16.666C22 17.771 21.105 18.667 20 18.667V18.667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17 16C18.105 16 19 15.105 19 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M19 10C19 8.895 18.105 8 17 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M7 8C5.895 8 5 8.895 5 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M5 14C5 15.105 5.895 16 7 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Bill

Bill.propTypes = {
  color: PropTypes.string,
}

Bill.defaultProps = {
  color: theme.palette.text.primary,
}
