import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Whatsapp = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.204 5.76242C16.558 4.11542 14.369 3.20742 12.037 3.20642C7.23002 3.20642 3.31902 7.11542 3.31802 11.9204C3.31602 13.4494 3.71702 14.9524 4.48102 16.2774L3.24402 20.7934L7.86602 19.5814C9.14502 20.2774 10.577 20.6424 12.033 20.6424H12.037C16.842 20.6424 20.753 16.7324 20.755 11.9274C20.756 9.59942 19.85 7.41042 18.204 5.76242Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M13.095 13.5604L13.501 13.1574C13.874 12.7874 14.464 12.7404 14.894 13.0424C15.31 13.3344 15.686 13.5964 16.036 13.8404C16.592 14.2264 16.659 15.0184 16.18 15.4964L15.821 15.8554"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.1449 8.17938L8.5039 7.82038C8.9819 7.34238 9.7739 7.40938 10.1599 7.96438C10.4029 8.31438 10.6649 8.69038 10.9579 9.10638C11.2599 9.53638 11.2139 10.1264 10.8429 10.4994L10.4399 10.9054"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.821 15.8553C14.34 17.3293 11.851 16.0773 9.88599 14.1113"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.88794 14.1144C7.92294 12.1484 6.67094 9.66044 8.14494 8.17944"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.4399 10.9054C10.7589 11.4084 11.1679 11.9064 11.6299 12.3684L11.6319 12.3704C12.0939 12.8324 12.5919 13.2414 13.0949 13.5604"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Whatsapp

Whatsapp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Whatsapp.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
