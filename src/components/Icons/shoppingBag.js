import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const ShoppingBag = ({ color }) => (
  <SvgIcon>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.49854 9.99915C8.49854 11.9329 10.0662 13.5006 12 13.5006V13.5006C13.9338 13.5006 15.5015 11.9329 15.5015 9.99915"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.49854 6.99788V6.49767C8.49854 4.56387 10.0662 2.99622 12 2.99622V2.99622C13.9338 2.99622 15.5015 4.56387 15.5015 6.49767V6.99788"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M6.4618 6.99792C5.40525 6.99792 4.53082 7.81946 4.46492 8.87395L4.00572 16.2211C3.92821 17.4614 4.36684 18.6786 5.21772 19.5843C6.06861 20.49 7.25605 21.0038 8.49878 21.0038H15.5013C16.7441 21.0038 17.9315 20.49 18.7824 19.5843C19.6333 18.6786 20.072 17.4614 19.9944 16.2211L19.5353 8.87395C19.4693 7.81946 18.5949 6.99792 17.5384 6.99792H6.4618Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default ShoppingBag

ShoppingBag.propTypes = {
  color: PropTypes.string,
}

ShoppingBag.defaultProps = {
  color: theme.palette.text.primary,
}
