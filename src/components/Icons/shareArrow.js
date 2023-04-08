import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const ShareArrow = ({ color, size }) => (
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
        d="M11.0817 8.94991C6.19364 9.50157 2.49865 13.6348 2.49609 18.5539V19.1662C4.62047 16.607 7.75615 15.1028 11.0817 15.0475V18.2758C11.0818 18.7442 11.3495 19.1714 11.7711 19.3757C12.1926 19.5799 12.6938 19.5254 13.0615 19.2352L21.0548 12.9236C21.3386 12.6999 21.5042 12.3585 21.5042 11.9972C21.5042 11.6359 21.3386 11.2945 21.0548 11.0708L13.0615 4.75917C12.6938 4.469 12.1926 4.41445 11.7711 4.61871C11.3495 4.82298 11.0818 5.25015 11.0817 5.71857V8.94991Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default ShareArrow

ShareArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

ShareArrow.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
