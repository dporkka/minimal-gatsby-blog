import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.overlay}></div>
      <div className={headerStyles.heroContent}>
        <p className={headerStyles.brand}>
          <Link className="davidporkka"to="/">{data.site.siteMetadata.title}</Link>
          {/* <Link className="dp" to="/">DP</Link> */}
        </p>
        <p className={headerStyles.description}>
          {data.site.siteMetadata.description}
        </p>
      </div>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" activeClassName={headerStyles.activeMenuItem}>
              Now
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeClassName={headerStyles.activeMenuItem}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/projects/" activeClassName={headerStyles.activeMenuItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>
              Email
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
