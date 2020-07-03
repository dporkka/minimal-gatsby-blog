import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata { 
            author
          }
        }
      }
    `
  )
  return (
    <footer className={footerStyles.siteFooter}>
    <div className={footerStyles.container}>
    <nav className={footerStyles.navContainer}>
      <ul className={footerStyles.navList}>
          <li>
            <Link to="/" className={footerStyles.dp} activeClassName={footerStyles.activeMenuItem}>
              DP
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={footerStyles.activeMenuItem}>
              Bio
            </Link>
          </li>
          <li>
            <Link to="/now/" activeClassName={footerStyles.activeMenuItem}>
              Now
            </Link>
          </li>
          <li>
            <Link to="/projects/" activeClassName={footerStyles.activeMenuItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeClassName={footerStyles.activeMenuItem}>
              Blog
            </Link>
          </li>
       
          <li>
            <Link to="/#contactme" activeClassName={footerStyles.activeMenuItem}>
              Email
            </Link>
          </li>
        </ul>
        </nav>
    

        <p>
          {data.site.siteMetadata.author} &copy;{" "}
          {new Date().getFullYear().toString()}{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer
