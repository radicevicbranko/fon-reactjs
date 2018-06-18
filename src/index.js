import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-theme.css"
import "font-awesome/css/font-awesome.css"

import { Provider } from "react-redux"
import rootReducer from "./redux/reducers"
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(axios)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
