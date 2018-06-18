import { connect } from 'react-redux'
import BookList from "../components/BooksList";
import { loadBooks } from '../redux/actions'

const mapStateToProps = state => ({
  books: state.books.booksList,
  fetching: state.books.fetching
});

const mapDispatchToProps = dispatch => ({
  loadBooks: () => dispatch(loadBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)