import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Faq = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9.00375"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.68469 9.6847C9.92172 8.66314 10.8522 7.95484 11.8999 7.99832C13.0726 7.93337 14.0779 8.82697 14.1509 9.99916C14.1509 11.5037 12 12 12 13.0004"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12.125 15.7516C12.125 15.8206 12.069 15.8766 12 15.8766C11.9309 15.8766 11.8749 15.8206 11.8749 15.7516C11.8749 15.6825 11.9309 15.6265 12 15.6265"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M11.9999 15.6265C12.069 15.6265 12.125 15.6825 12.125 15.7516"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Faq

Faq.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Faq.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
