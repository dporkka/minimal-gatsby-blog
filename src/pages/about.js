import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
// import davidporkkabeach from "../images/davidporkkabeach.jpg"

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="Get to know me" />
     <h2 className="about-me-h2">About Me:</h2>
     <h3>Work:</h3>
     <p>Web development, writing, and entrepreneurial <a href="/projects">ventures</a></p>
     <h3>Hobbies:</h3>
     <p>Making music, coding, biking, reading, and photography</p>
     <h3>Music Tastes:</h3>
     <p>Eclectic, but mostly electronic, alternative, bluegrass, and instrumental</p>
     <h3>Movie Tastes:</h3>
     <p>Sci-fi, comedies, action, documentaries, foreign</p>
     <h3>Favorite Foods:</h3>
     <p>Dark chocolate, granny smith apples, and blueberries</p> 
     <h3>Liquid Fuel:</h3>
     <p>Darjeeling tea, espresso, or dark roast coffee</p>
     <h3>Location:</h3>
     <p>U.S.</p>
     <h3>Genome:</h3>
     <div className="genomediv">
     <p className="genome">ATGAAAATGAACAACAAAACTGTCATCACCCAGTTTCTCCTCCTGGGACTGCCCATTTCCCTAGAGTACA
AACACCTGTTCTATGCCCTGTTTCTGGCCATGTACCTCACCACTGTCCTGGGAAACCTGCTAATAATTGT
CCTCATTAAACTGGACTCCCATCTCCACACACCAATGTACTTGTTTCTCAGCAACCTCTCCTTCTCTGAC
CTCTGCTTTTCCTCTGTCACAATGCCCAAAATGCTGCATAATATGCAGAGCCAGGACCCATCCATCCCCT
ATGGAGGGTGCCTGGCACAAATATACTTCCTTATGGCTTTTGGAGATATGGAGAGCTTTCTTCTTGTGGT
CATGGCTTATGACCGCTATGTGGCCATCTGCTTCCCTCTGCATTACACCAGCATCATGAGCCCCAAGCTC
TGTACTTGTCTAATGCTGCTACTGTGGATACTGACGACATCACATGCCATGATGCACACCCTGCTTGCAG
CAAGATTGTCTTTTTGTGAGAACAATGTGATCCTCAACTTTTTCTGTGACCTATTTGCTGTCCTAAAGCT
GTCCTGCTCAGACACTTATATTAATGATTTGATGATACTTATTTTTGGAGGACTCATCTTTATTATTCCA
</p>
<p id="genomeRevealed">Just joking, I haven't been sequenced yet.</p>
</div>
    </Layout>
  )
}
export default About
