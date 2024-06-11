import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  }
`

const theme = {
  colors: {
    primary: "#007acc",
  },
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Helmet>
      <title>My Portfolio</title>
    </Helmet>
    <header>
      <h1>My Portfolio</h1>
    </header>
    <main>{children}</main>
  </ThemeProvider>
)

export default Layout
