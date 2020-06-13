import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Projects" description="home page" />
      <h2>Hi!</h2>
      <h3>This is where I share things that I'm working on and thinking about.</h3>
      <a href="/about">Learn more about me</a>
      <h2 className="projetcsHeader"><strong>Current Projects:</strong></h2>
      <a href="https://www.nulango.com"><h2>Nulango</h2></a>
      <p>My brother and I are building this web app to help people quickly learn a new language by sharing the most common words and phrases.</p>
      <a href="https://5minutehealth.com"><h2>5 Minute Health</h2></a>
      <p> After working in a grocery store and seeing the difference nutrition made in my life and other peoples’ lives, I decided to share what I’ve learned about health through this website.</p>
      <a href="https://ochemshop.com"><h2>O-Chem Shop</h2></a>
      <p>I built this site to provide organic chemistry products and resources to chemistry students and professionals.</p>
      <a href="/projects">See All Projects</a>
      <br></br>
      <h2 className="latestPosts"><strong>Latest Posts:</strong></h2>
      <a href="/blog/underrated-things"><h2>Things That are Underrated</h2></a><br></br><br></br>
      <a href="/blog/canyon-jumping"><h2>The Lost Art of Canyon Jumping</h2></a>
      <a href="/blog/shoe-flash"><h2>Things Can Change in the Flash of a Shoe</h2></a>
      <a href="/blog">See All Posts</a>
      <br></br>
      <h2 className="contactMe"><strong>Email Me:</strong></h2>
      <p>davidporkka[at]gmail.com</p>
    </Layout>

  )
}

export default Index