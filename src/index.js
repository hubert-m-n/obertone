import React from "react"
import ReactDOM from "react-dom"
import { Route, HashRouter } from "react-router-dom"

import App from "./App"

import * as serviceWorker from "./serviceWorker"
import "./index.css"

ReactDOM.render(
  <HashRouter>
    <Route path="/:section?">
      <App />
    </Route>
  </HashRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
