import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Tools = () => {
  return (
    <Layout>
      <Metadata title="Tools" description="Tools I Use" />
        <div className="tools-section">
            <h2 className="tools-h2">Tools</h2>
            <p>These are some of the tools that I use. (Still in progress)</p>
            <a className="toolOne" ><h3>Nikon d3400</h3></a>
            <p>Entry level DSLR camera that takes decent pics</p>

            <a className="toolTwo"><h3>Kindle</h3></a>
            <p>This is what I read most of my books on. Love how easy it is to take notes, and it doesn't blast my eyes with blue light at night, which helps me sleep better.</p>
            <a className="toolThree" ><h3>HP 25f external monitor</h3></a>
            <p>25" monitor that helps me be more productive when doing web development work or doing most things online.
            </p>
            <a className="toolFour" ><h3>Rav External Power Pack</h3></a>
            <p>Battery pack to charge my appliances. Comes in handy when traveling or if I forget to charge something and don't feel like waiting for it to charge in a wall socket. It holds 26.8 amp hours of power.</p>
        </div>
    </Layout>
  )
}
export default Tools