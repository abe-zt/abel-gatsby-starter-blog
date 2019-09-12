import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    //const { location, title, children } = this.props
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className="header-1">
          <h1
            style={{
              ...scale(2),
              //marginBottom: rhythm(3),
              marginTop: 0,
            }}
          >
            Hey, I'm Abel
          </h1>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            ...scale(0.5),
            //fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              textShadow: `none`,
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Home
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '800px',
          minWidth: '325px',
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer-main>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> {' '} and modified by Abel Zatarain
        </footer-main>
      </div>
    )
  }
}

export default Layout
