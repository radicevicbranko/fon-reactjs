import { BookActions } from "../actions/actionTypes";

const INITIAL_STATE = {
  booksList: [],
  fetching: true,
  currentBook: {},
  searchTerm: ""
};

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActions.START_FETCHING:
      return {
        ...state,
        fetching: true,
        currentBook: {}
      };
    case BookActions.ON_BOOKS_RECEIVED:
      return {
        ...state,
        fetching: false,
        booksList: action.books
      };
    case BookActions.ON_BOOK_DETAILS_RECEIVED:
      return {
        ...state,
        fetching: false,
        currentBook: action.book
      };
    case BookActions.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.term
      };
    default:
      return state;
  }
};

export default booksReducer;
