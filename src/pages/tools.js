import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import styles from "/Users/Gertrude/Projects/dave2/src/pages/tools.module.scss"

const Tools = () => {
  return (
    <Layout>
      <Metadata title="tools" description="Tools I Use" />
        <div className="toolsSection">
            <h2 className="htools">Tools</h2>
            <p>These are some of the tools that I use. <i>(Page in progress)</i></p>
            <h3 className={styles.htools}>Avantree Sports Earbuds</h3>
            <p>I've used a lot of earbuds over the years, and these are my favorite so far. They have great sound quality, are indestructible, comfortable, relatively inexpensive, and have ear loops so they don't fall out when running or doing other high-impact things.</p>
            <h3 className={styles.htools}>Audio-technica ATH-M20x Headphones</h3>
            <p>I use these when working on the computer, making music, and moving the lawn. They provide top-quality audio quality at a budget level pricing. Their over-the-ear fit is also very comfortable and does a nice job isolating outside noises.</p>
            
            <a className="toolOne" ><h3 className={styles.htools}>Nikon d3400</h3></a>
            <p>Entry level DSLR camera that takes decent pics</p>

            <a className="toolTwo"><h3 className={styles.htools}>Kindle</h3></a>
            <p>This is what I read most of my books on. Love how easy it is to take notes, and it doesn't blast my eyes with blue light at night, which helps me sleep better.</p>
           
            <h2>Computer Setup</h2>
            <h3 className={styles.htools}>T-90 Giant Spider Inceptor mouse</h3>
            <p>After decades of using generic mice, I finally decided to upgrade to a gamer mouse and will never go back. This mouse has sensitiviy adjustment, so I can easily change the movement speed, for doing different types of work, (for example: artwork, vs browsing), a double click button, and super ergonomic feel to prevent carpal tunnel syndrome.</p>
            <a className="toolThree" ><h3 className={styles.htools}>HP 25f external monitor</h3></a>
            <p>25" monitor that helps me be more productive when doing web development work or doing most things online.</p>
            <h3 className={styles.htools}>Logitech K750 solar-powered, wireless keyboard</h3>
            <p>Love the feeling and sound of these keys. I could be doing my taxes on this thing and it would sound like I was performing an ASMR album. It's also very reliable, I've never had to wait for it to charge or do any troubleshooting.</p>

            <a className="toolFour" ><h3 className={styles.htools}>Rav External Power Pack</h3></a>
            <p>Battery pack to charge my appliances. Comes in handy when traveling or if I forget to charge something and don't feel like waiting for it to charge in a wall socket. It holds 26.8 amp hours of power.</p>

            <h2>Text Editing</h2>
            <h3 className={styles.htools}>Google Docs and Sheets</h3>
            <p>Revolutionary, I know. But I love having everything in the cloud (and locally). It makes accessing all my documents easy from any computer, and also makes me feel good, knowing that if I spill coffee on my computer, my documents will live on.</p>

            <h3 className={styles.htools}>Apple notes</h3>
            <p>Love the speed, simplicity, and search function of notes. They just work</p>

            <h3 className={styles.htools}>Visual Studio Code</h3>
            <p>Tried a lot of editors, but like using VS Code the best becuase of its extensive feautures, plugins, built-in terminal, and appearance.</p>

            <h3 className={styles.htools}>Waiters Notepads</h3>
            <p>Seriously, I carry a little notepad with me everywhere. I carry them to capture good and bad ideas, and to work on ideas when I need a break from the computer.</p>

            <h3 className={styles.htools}>Bic Multi-colored pens</h3>
            <p>I like adding a little color to my notes, I think it makes them more organized and memorable.</p>

            <h2>Web Design</h2>

            <h3 className={styles.htools}>Adobe XD</h3>
            <p>Use this program to design websites and build websites from other people's designs. </p>

            <h3 className={styles.htools}>Moqups</h3>
            <p>Also use this for designing websites. I think it's more user friendly than Adobe XD.</p>

            <h3 className={styles.htools}>Adobe Photoshop</h3>
            <p>Use this for designing websites and editing photos. Mostly editing photos.</p>

            <h3 className={styles.htools}>XnConvert</h3>
            <p>Use this to do bulk conversions between different types of file types.</p>

            <h2>Music</h2>

            <h3 className={styles.htools}>GarageBand</h3>
            <p>Use this for simple audio recordings on my phone</p>

            <h3 className={styles.htools}>Logic Pro X</h3>
            <p>Use this to make music online. It's basically the paid version of garage band</p>

            <h3 className={styles.htools}>Graphite 49 MIDI</h3>
            <p>Cheap digital piano that feels ok and has everything I need to interface with a music program like Logic or GarageBand. I plan to upgrade soon to something bigger with better touch response.</p>

          <h2>Sleep Tech</h2>

            <h3 className={styles.htools}>Orange UVEX blue-light blocking goggles </h3>
            <p>I use these goggles when I'm working on the computer late at night to improve my sleep and to spook my neighbors.</p>

          <h3 className={styles.htools}>Flux</h3>
          <p>This software gradually decreases the blue-light your computer produces as the day progresses to help you sleep better.</p>

          <h3 className={styles.htools}>Sleep Melodies</h3>
          <p>Customizable sleep app that you can use to produce your own relaxing sleep sounds.</p>

          <h2>Security</h2>

          <h3 className={styles.htools}>OnePass Password Manager</h3>
          <p>It can be easy to get in the habit of reusing passwords for convenience and give up security. This cloud-based password manager can solve this problem by creating random passwords for you and saving them in a secure safe in the cloud that you can access from anywhere.</p>

          <h3 className={styles.htools}>Private Internet Access VPN</h3>
          <p>I work at coffee shops a lot and use the pubic wifi. Unfortunately, almost all public wifi networks are unencrypted, which means people could see any of my network activity, including financial transactions, if they wanted to. By using a VPN, you're able to encrypt this traffic to increase your digital privacy and security on public networks.</p>
{/* 
          <h2>Learning</h2>

          <h3 className={styles.htools}> Anki spaced-repetition flashcard system</h3>
          <p>This is a community driven flashcard platform that allows users to create their own flashcards or download decks of other flashcards on hundreds of different topics. I've found some of the language-learning flashcards to be especially helpful for learning new vocabulary. Unlike other flashcard systems, Anki helps you learn and review new cards based on the difficulty you assign to each card, so you spend more time learning material you don't know and less time reviewing material you're comfortable with.</p>

          <h3 className={styles.htools}>Books</h3>
          <p>For programming, I like many of the O'Reilly books</p>
          <p>I'll add some of my favorites soon for each category.</p> */}


        </div>
    </Layout>
  );
}
export default Tools