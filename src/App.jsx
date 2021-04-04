import React from "react"
import "intersection-observer"

import { useCurrentSection } from "common/utils"
import HomePage from "home/HomePage"
import OrderPage from "order/OrderPage"

const App = () => {
  const currentSection = useCurrentSection()

  return currentSection === "dabeisein" ? <OrderPage /> : <HomePage />
}

export default App
