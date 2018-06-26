import { BookActions } from "./actionTypes";

export const loadBooks = (term = "react") => {
  return async (dispatch, getState, axios) => {
    dispatch(startFetching());
    dispatch(setSearchTerm(term));
    const response = await axios.get(`/api/1.0/search/${term}`);
    dispatch(onBooksLoaded(response.data.books));
  };
};

export const onBooksLoaded = books => {
  return {
    type: BookActions.ON_BOOKS_RECEIVED,
    books
  };
};

export const setSearchTerm = term => {
  return {
    type: BookActions.SET_SEARCH_TERM,
    term
  };
};

export const startFetching = () => {
  return {
    type: BookActions.START_FETCHING
  };
};

export const getBookDetails = bookId => {
  return async (dispatch, getState, axios) => {
    dispatch(startFetching());
    const response = await axios.get("/api/1.0/books/" + bookId);
    dispatch(onBookDetailsReceived(response.data));
  };
};

export const onBookDetailsReceived = book => {
  return {
    type: BookActions.ON_BOOK_DETAILS_RECEIVED,
    book
  };
};
