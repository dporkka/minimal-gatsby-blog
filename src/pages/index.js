import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
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
      <div className="home-section">
      <div className="intro">
      <h2 className="hi">Welcome to my digital abode</h2>
      <h3 className="p1">I'm a web developer who writes. This is where I share things I'm working on and thinking about. </h3>
      {/* <a href="/now"><button className="learn-about-me">What I&rsquo;m doing now</button></a> */}
      </div>
      <div className="posts-section">
      <h2 className="latestPosts"><strong>Latest Posts</strong></h2>
      <div className="posts-section-inner">
      <a href="/blog/design-choices"><h2>Design Choices for This Site</h2></a><br></br><br></br>
      <a href="/blog/linguini-war"><h2>The Linguini War of the 1950s</h2></a><br></br><br></br>
      <a href="/blog/underrated-things"><h2>Things That are Underrated</h2></a><br></br><br></br>
      
      <a href="/blog"><button className="see-posts">See All Posts</button></a>
      </div>
      </div>
      <div className="projects-section-index">
      <h2 className="projectsHeader"><strong>Current Projects</strong></h2>
      <div className="projects-section-inner">
      <a href="https://www.nulango.com" className="project1"><h2>Nulango</h2></a>
      <p>Web app to help people quickly learn a new language</p>
      <a href="https://ochemshop.com" className="project3"><h2>O-Chem Shop</h2></a>
      <p>Organic chemistry products and resources for chemistry students and professionals</p>
      <a href="/" className="project2"><h2>This Site</h2></a>
      <p>Adding new features and content to this Gatsby static site. The code is available on <a href="https://github.com/dporkka/minimal-gatsby-blog" className="link1">GitHub</a>.</p>
      <a href="/projects" className="seeProjects"><button className="projectsBtn">See All Projects</button></a>
      </div>
      </div>
      <br></br>
      
      <div className="contact-section">
      <h2 id="contactme"><strong>Email Me</strong></h2>
      <p className="mail-text"><a href="mailto:davidporkka@gmail.com">davidporkka@gmail.com</a></p>
      </div>
      </div>
    </Layout>
  )
}

export default Index