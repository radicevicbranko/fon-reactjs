import { connect } from "react-redux";
import BookDetails from "../components/BookDetails";
import { getBookDetails } from "../redux/actions/books";
import { addToCart } from "../redux/actions/cart";

const mapStateToProps = state => ({
  currentBook: state.books.currentBook,
  fetching: state.books.fetching
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
  getBookDetails: id => dispatch(getBookDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetails);
