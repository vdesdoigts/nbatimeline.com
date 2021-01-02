/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { Global, css } from "@emotion/core"
import customTheme from "../assets/theme"
import "typeface-montserrat"
import "typeface-vollkorn"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Global
        styles={css`
          html {
            background: #000;
            color: white;
          }
        `}
      />
      {children}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
