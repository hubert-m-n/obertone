import React, { useState } from "react"
import "intersection-observer"

import { useCurrentSection } from "common/utils"
import HomePage from "home/HomePage"
import AboutTeamPage from "aboutTeam/AboutTeamPage"

const App = () => {
  const currentSection = useCurrentSection()
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en")

  return currentSection === "team" ? (
    <AboutTeamPage lang={lang} onChangeLang={setLang} />
  ) : (
    <HomePage lang={lang} onChangeLang={setLang} />
  )
}

export default App
