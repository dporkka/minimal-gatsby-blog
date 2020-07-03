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
          {/* { <Link className="dp" to="/">DP</Link>} */}
        </p>
        <p className={headerStyles.description}>
          {data.site.siteMetadata.description}
        </p>
      </div>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" className={headerStyles.dp} activeClassName={headerStyles.activeMenuItem}>
              DP
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
              Bio
            </Link>
          </li>
          <li>
            <Link to="/now/" activeClassName={headerStyles.activeMenuItem}>
              Now
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeClassName={headerStyles.activeMenuItem}>
              Blog
            </Link>
          </li>
       
          <li>
            <Link to="/#contactme" activeClassName={headerStyles.activeMenuItem}>
              Email
              </Link>
          </li>
          <li className={headerStyles.dropdown}>
            <a href="/#more" activeClassName={headerStyles.activeMenuItem}>
              More 
              <div className={headerStyles.svgDiv}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className={headerStyles.faChevronDown} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></div></a>
            <ul className={headerStyles.dropdownList}>
              <li>
                <Link to="/projects/" activeClassName={headerStyles.activeMenuItem}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/tools/" activeClassName={headerStyles.activeMenuItem}>
                  Tools
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
