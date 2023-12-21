import React from "react"
import "./index.css"
import Navbar from "./components/Navbar"
import Main from "./components/Main"


export default function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleMode() {
    setDarkMode(preMode => !preMode)
  }

  return (
    <div>
      <Navbar 
      darkMode={darkMode}
      toggleMode={toggleMode}
      />
      <Main 
      darkMode={darkMode}
      />

    </div>
  )
}