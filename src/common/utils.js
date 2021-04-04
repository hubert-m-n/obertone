import { useRouteMatch } from "react-router-dom"

import { get } from "lodash"

export const useCurrentSection = () =>
  get(useRouteMatch("/:section"), "params.section", "")
