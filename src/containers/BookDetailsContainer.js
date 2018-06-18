import { connect } from 'react-redux'
import BookDetails from '../components/book-details'
import { addToCart, getBookDetails } from '../redux/actions'

const mapStateToProps = state => ({
  currentBook: state.books.currentBook,
  fetching: state.books.fetching
})

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
  getBookDetails: id => dispatch(getBookDetails(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetails)