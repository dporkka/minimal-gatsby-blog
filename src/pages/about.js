import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="Get to know me" />
    <div className="about-section-two">
     <h2 className="about-me-h2"><strong>About Me:</strong></h2>
     <h3><strong>Work</strong></h3>
     <p>Web development, writing, and entrepreneurial <a href="/projects">ventures</a></p>
     <h3><strong>Hobbies</strong></h3>
     <p>Making music, coding, biking, reading, and photography</p>
     <h3><strong>Music Tastes</strong></h3>
     <p>Eclectic, but mostly electronic, alternative, bluegrass, and instrumental</p>
     <h3><strong>Movie Tastes</strong></h3>
     <p>Sci-fi, comedies, action, documentaries, foreign</p>
     <h3><strong>Liquid Fuel</strong></h3>
     <p>Darjeeling tea, espresso, or dark roast coffee</p>
     <h3><strong>Location</strong></h3>
     <p>Milwaukee, Wisconsin</p>
     <h3><strong>Genome</strong></h3>
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
</div>
    </Layout>
  )
}
export default About
