import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Projects = () => {
  return (
    <Layout>
      <Metadata title="About" description="Get to know me" />
      <h1>Projects</h1>
      <a href="https://www.nulango.com"><h2>Nulango</h2></a>
      <p>My brother and I are building this web app to help people quickly learn a new language by sharing the most common words and phrases.</p>

      <a href="https://5minutehealth.com"><h2>5 Minute Health</h2></a>
      <p> After working in a grocery store and seeing the difference nutrition made in my life and other peoples’ lives, I decided to share what I’ve learned about health through this website.</p>
      <a href="https://ochemshop.com"><h2>O-Chem Shop</h2></a>
      <p>I built this site to provide organic chemistry products and resources to chemistry students and professionals.</p>
    </Layout>
  )
}
export default Projects