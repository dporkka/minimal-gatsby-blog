import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import styles from "./index.css"
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <ThemeToggler>
//         {({ theme, toggleTheme }) => (
//           <label>
//             <input
//               type="checkbox"
//               onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
//               checked={theme === 'dark'}
//             />{' '}
//             Dark mode
//           </label>
//         )}
//       </ThemeToggler>
//     )
//   }
// }

const Index = () => {
  return (
    <Layout>
      <Metadata title="Projects" description="home page" />
      <div className="intro">
      <h2 className="hi">Hi!</h2>
      <h3>This is where I share things that I'm working on and thinking about.</h3>
      {/* <a href="/now"><button className="learn-about-me">What I&rsquo;m doing now</button></a> */}
      </div>
      <div className="projects-section-index">
      <h2 className="projectsHeader"><strong>Current Projects</strong></h2>
      <a href="https://www.nulango.com" className="project1"><h2>Nulango</h2></a>
      <p>My brother and I are building this web app to help people efficiently learn a new language by sharing the most common words and phrases for the most popular languages.</p>
      <a href="/" className="project2"><h2>This Site</h2></a>
      <p> I just converted this site over from WordPress to Gatsby, so I'm still adding more features to this static site and adding new content weekly. Stop by soon to see the upgraded version.</p>
      <a href="https://ochemshop.com" className="project3"><h2>O-Chem Shop</h2></a>
      <p>I built this site to provide organic chemistry products and resources to chemistry students and professionals.</p>
      <a href="/projects" className="seeProjects"><button className="projectsBtn">See All Projects</button></a>
      </div>
      <br></br>
      <div className="posts-section">
      <h2 className="latestPosts"><strong>Latest Posts</strong></h2>
      <a href="/blog/underrated-things"><h2>Things That are Underrated</h2></a><br></br><br></br>
      <a href="/blog/canyon-jumping"><h2>The Lost Art of Canyon Jumping</h2></a><br></br><br></br>
      <a href="/blog/shoe-flash"><h2>Things Can Change in the Flash of a Shoe</h2></a><br></br><br></br>
      <a href="/blog"><button className="see-posts">See All Posts</button></a>
      </div>
      <br></br>
      <div className="contact-section">
      <h2 id="contactme"><strong>Email Me</strong></h2>
      <p className="mail-text">davidporkka[at]gmail.com</p>
      </div>
    </Layout>
  )
}

export default Index