import { connect } from "react-redux";
import BookList from "../components/BooksList";
import { loadBooks } from "../redux/actions/books";

const mapStateToProps = state => ({
  books: state.books.booksList,
  fetching: state.books.fetching
});

const mapDispatchToProps = dispatch => ({
  loadBooks: term => dispatch(loadBooks(term))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
