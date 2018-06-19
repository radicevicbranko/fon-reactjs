import { connect } from 'react-redux'
import Cart from "../components/Cart";
import { placeOrder } from '../redux/actions/cart'

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
  placeOrder: () => dispatch(placeOrder())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)