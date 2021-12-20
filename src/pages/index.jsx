import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import { OutboundLink } from "gatsby-plugin-google-gtag"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <p>Custom mixed ambience for mindfulness and relaxation.</p> */}
    <p>
      <strong>Ripple Soundscapes</strong> is a YouTube channel where I share
      mixes of various nature sounds and music to create soundscapes for sleep,
      relaxation, mindfulness and focus. I’m just getting started and would love
      for you to check it out.
    </p>
    <p>
      I currently work as a web developer and as someone that sits huddled
      around the computer all day, nature has always been my escape. Some of my
      most peaceful moments have been spent out on the trail. Nothing really
      compares to the ambience you get in the middle of nature, all you need to
      do is stop for a moment and listen. This is the type of experience I am
      trying to share with others. Some of my first mixes were created years ago
      and I finally decided to start sharing them. I hope that I can help people
      find their escape in this busy world also.
    </p>
    <p>
      Eventually, my end goal for the channel is to do on location recording
      from all over. I think it's an ambitious goal but with your support, maybe
      I'll get there one day. Thank you!
    </p>

    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
