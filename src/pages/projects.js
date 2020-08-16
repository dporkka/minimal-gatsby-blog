import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Projects = () => {
  return (
    <Layout>
      <Metadata title="Projects" description="What I'm working on" />
      <div className="projects-section">
      <h2 className="current-projects"><strong>Current Projects</strong></h2>
      <a className="nulango-projects" href="https://www.nulango.com"><h2>Nulango</h2></a>
      <p>Web app to help people quickly learn a language</p>
      <a className="ochemshop-projects" href="https://ochemshop.com"><h2>O-Chem Shop</h2></a>
      <p>Organic chemistry products and resources for chemistry students and professionals
      </p>
      <a href="/" className="project2"><h2>This Site</h2></a>
      <p>Adding new features and content to this Gatsby static site. The code is available on <a href="https://github.com/dporkka/minimal-gatsby-blog" className="link1">GitHub</a>.</p>
      <h2 className="on-hold-projects"><strong>On Hold</strong></h2>
      <a className="5mh-projects"href="https://5minutehealth.com"><h2>5 Minute Health</h2></a>
      <p>Health and nutrition website with a focus on brain health and lengthening healthspan</p>
      <a href="https://docs.google.com/spreadsheets/d/1ZULEa5NRBXssyZtWWEkaEXnnUQZogtAV2ZX4j75tW5o/edit?usp=sharing" className="project2"><h2>Income and Expense Tracker (Google Sheet)</h2></a>
      <p>Built this to keep track of recurring income and expenses. A free, editable version of this program is available <a href="https://docs.google.com/spreadsheets/d/1ZULEa5NRBXssyZtWWEkaEXnnUQZogtAV2ZX4j75tW5o/copy" className="link1">here</a>.</p>
    </div>
    </Layout>
  )
}
export default Projects