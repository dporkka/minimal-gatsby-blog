import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Now = () => {
  return (
    <Layout>
      <Metadata title="Now" description="What I am doing now" />
      <div className="now-section">
      <h2>What I&rsquo;m up to now:</h2>
<p><strong>Working on</strong>&nbsp;</p>
<p><a 
href="https://www.nulango.com">Nulango</a>, a language learning web app with my brother, and adding some new content and features to this site.</p>

<p><strong>Recent Adventures</strong></p>

<p>Took a roadtrip to Pictured Rock National Park in Wisconsin and did some hiking, then continued the road trip up to the Upper Peninsula in Michigan and snorkeled for agates in the clear, cold waters of Lake Superior. Highly recommend both activities.
</p>

<p><strong>New Routines</strong></p>

<p>Trying to take more deep belly breaths to better oxygenate and improve lung elasticity. I'll report later on the effectiveness on this new breathing routine.</p>

<p>Last month I started experimenting with short duration high-intensity running, and have contnued to do that for most of the month. Overall, I didn't notice a big difference in endurance from these shorter runs, but maybe I'm running faster, probably should be measuring my speed to be more objective.</p>

<p><strong>Current Music</strong></p>

<p>Vision by Atmosphere</p>
<p>This instrumental song starts slowly with a mysterious synth sound and gradually builds into a motivating and immersive war drum with a stimulating electronic beat that makes you want to explore. I recommend playing this song before you step into a forest or try listening to it to make boring things seem more interesting.</p>

<p><strong>Learning</strong></p>

<p>React JS (Javascript library),&nbsp; Amazon Web Services, and Mandarin.</p>

<p><strong>Latest Good Reads</strong></p>

<p><a href="https://waitbutwhy.com/">Wait But Why Articles</a></p>
<p>Been binge reading articles on this wide-ranging, sometimes informative, often profound, yet light-hearted site. </p>
<hr className="now-line"></hr>

<p><strong>The Now Archive:</strong></p>
<p><a href="/07-20">July 2020</a></p>

<hr className="now-line"></hr>

<p> This page was inspired by <a href="https://sivers.org/">Derek Sivers</a> and the <a href="https://nownownow.com/">Now Project</a>.</p>
    </div>
    </Layout>
  )
}
export default Now