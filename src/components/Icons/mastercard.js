import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'

const Mastercard = ({ size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 54 33">
    <svg
      height="33"
      viewBox="0 0 54 33"
      width="54"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group_1295" transform="translate(-8969.193 -1864.196)">
        <path
          d="M288.115,38.788h14.767V65.194H288.115Z"
          fill="#ff5f00"
          id="Path_1594"
          transform="translate(8701 1829)"
        />
        <g id="Group_1294" transform="translate(8701 1829)">
          <path
            d="M289.053,51.993A16.731,16.731,0,0,1,295.5,38.787,16.939,16.939,0,0,0,272.671,40.6a16.732,16.732,0,0,0,0,22.785A16.939,16.939,0,0,0,295.5,65.194a16.735,16.735,0,0,1-6.446-13.2Z"
            fill="#eb001b"
            id="Path_1595"
          />
          <path
            d="M322.806,51.993a16.884,16.884,0,0,1-27.308,13.2,16.74,16.74,0,0,0,0-26.406,16.884,16.884,0,0,1,27.308,13.2Z"
            fill="#f79e1b"
            id="Path_1596"
          />
        </g>
        <path
          d="M321.236,62.014v1.311h-.11V62.014h-.269v-.271h.627v.271Zm1.219-.271v1.583l-.111.011v-1.2l-.2,1.029H322l-.2-1.029v1.187h-.137V61.742h.168l.222,1.131.221-1.131Z"
          fill="#f79e1b"
          fillRule="evenodd"
          id="Path_1597"
          transform="translate(8701 1829)"
        />
      </g>
    </svg>
  </SvgIcon>
)

export default Mastercard

Mastercard.propTypes = {
  size: PropTypes.number,
}

Mastercard.defaultProps = {
  size: 1.5,
}
