import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Bill = ({ color }) => (
  <SvgIcon viewBox="0 0 20 20">
    <svg
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9.99997"
        cy="9.99984"
        r="9.00375"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.99963 13.5012H11.3099"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.159 13.5018V9.25H9.00854"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.1 6.24533C10.1 6.38345 9.98807 6.49543 9.84994 6.49543C9.71181 6.49543 9.59984 6.38345 9.59984 6.24533C9.59984 6.1072 9.71181 5.99522 9.84994 5.99522"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.84989 5.99527C9.98802 5.99527 10.1 6.10725 10.1 6.24538"
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
  color: theme.palette.primary.dark,
}
