import React from "react"

export const themes = {
  light: {
    foreground: "#000000",
    background: "#fff"
  },
  dark: {
    foreground: "#fff",
    background: "#282c35"
  }
}

export const ThemeContext = React.createContext("light")
