import { connect } from 'react-redux'
import Cart from '../components/cart'
import { placeOrder } from '../redux/actions'

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
  placeOrder: () => dispatch(placeOrder())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)