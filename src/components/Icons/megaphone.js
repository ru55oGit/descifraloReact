import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'

const Megaphone = ({ size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 154 154">
    <svg
      fill="none"
      height="154"
      viewBox="0 0 154 154"
      width="154"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M146.167 106.52C150.195 110.584 150.195 117.173 146.167 121.236C142.14 125.3 135.611 125.3 131.583 121.236C127.556 117.173 127.556 110.584 131.583 106.52C135.611 102.457 142.14 102.457 146.167 106.52Z"
        fill="#2257C8"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M29.0835 8.74264C31.0972 10.7745 31.0972 14.0688 29.0835 16.1007C27.0699 18.1325 23.8051 18.1325 21.7915 16.1007C19.7778 14.0688 19.7778 10.7745 21.7915 8.74264C23.8051 6.71079 27.0699 6.71079 29.0835 8.74264Z"
        fill="#2257C8"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M113.097 99.5803L42.1981 106.084C37.3111 106.558 33.8583 109.32 31.8856 104.783L25.1294 94.3042C23.1746 89.7599 24.3322 84.4627 27.9998 81.1694L90.9023 24.265C93.6259 21.7903 97.3585 20.7797 100.944 21.5461C104.53 22.3125 105.156 24.6639 106.651 28.0404L131.143 86.5731C133.614 92.4127 129.176 95.7399 123.409 98.2796C122.282 98.7806 114.324 99.4787 113.097 99.5803Z"
        fill="#EEEAFE"
        fillRule="evenodd"
        stroke="#EEEAFE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.85975"
      />
      <path
        d="M57.1462 105.491C55.5253 114.401 59.6399 123.376 67.4193 127.899C75.1986 132.421 84.9571 131.511 91.7834 125.627C98.6096 119.742 101.025 110.159 97.8129 101.699"
        stroke="#8065E0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.85975"
      />
      <path
        clipRule="evenodd"
        d="M121.653 99.4766L37.53 107.318C32.6429 107.792 28.0067 105.046 26.0339 100.509L19.9704 86.4898C18.0156 81.9454 19.1732 76.6482 22.8408 73.3549L85.7432 16.4505C88.4669 13.9759 92.1994 12.9652 95.785 13.7316C99.3706 14.498 102.376 16.949 103.872 20.3255L131.165 83.4295C133.636 89.2691 130.977 96.0265 125.21 98.5663C124.082 99.0672 122.88 99.3749 121.653 99.4766Z"
        fillRule="evenodd"
        stroke="#8065E0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.85975"
      />
      <path
        d="M130.7 40.7094L136.469 32.0847"
        stroke="#5E5F73"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.87289"
      />
      <path
        d="M137.057 49.355L147.047 46.7715"
        stroke="#5E5F73"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.87289"
      />
      <path
        d="M137.4 61.5997L146.723 66.0487"
        stroke="#5E5F73"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.87289"
      />
    </svg>
  </SvgIcon>
)

export default Megaphone

Megaphone.propTypes = {
  size: PropTypes.number,
}

Megaphone.defaultProps = {
  size: 9,
}
