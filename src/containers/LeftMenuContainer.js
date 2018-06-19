import { connect } from 'react-redux'
import LeftMenu from "../components/LeftMenu";
import { loadBooks } from '../redux/actions/books'

const mapStateToProps = (state) => ({
    searchTerm: state.books.searchTerm
})

const mapDispatchToProps = dispatch => ({
    loadBooks: (term) => dispatch(loadBooks(term))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftMenu)