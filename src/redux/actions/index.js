import { BookActions, CartActions } from "./actionTypes"

export const loadBooks = () => {
  return async (dispatch, state, axios) => {
    dispatch(startFetching())
    const response = await axios.get("/api/1.0/search/react")
    dispatch(onBooksLoaded(response.data.books))
  }
}

export const onBooksLoaded = books => {
  return {
    type: BookActions.ON_BOOKS_RECEIVED,
    books
  }
}

export const startFetching = () => {
  return {
    type: BookActions.START_FETCHING
  }
}

export const getBookDetails = bookId => {
  return async (dispatch, state, axios) => {
    dispatch(startFetching())
    const response = await axios.get(
      "/api/1.0/books/" + bookId
    )
    dispatch(onBookDetailsReceived(response.data))
  }
}

export const onBookDetailsReceived = book => {
  return {
    type: BookActions.ON_BOOK_DETAILS_RECEIVED,
    book
  }
}

export const addToCart = item => {
  return {
    type: CartActions.ADD_TO_CART,
    item
  }
}

export const onOrderPlaced = () => {
  return {
    type: CartActions.ON_ORDER_PLACED
  }
}

export const placeOrder = () => {
  return async (dispatch, state, axios) => {
    const result = await axios.post("/place-order", state().cart.cartItems)
    if (result.status === 200) {
      dispatch(onOrderPlaced())
    }
  }
}
