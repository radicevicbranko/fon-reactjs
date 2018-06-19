import { connect } from 'react-redux'
import NavigationBar from "../components/NavigationBar"
import { loadBooks } from '../redux/actions/books'

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
    loadBooks: (term) => dispatch(loadBooks(term))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)