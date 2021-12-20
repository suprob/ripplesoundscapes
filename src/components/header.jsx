import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Header = ({ siteTitle }) => (
  <header className="page-header">
    <div className="welcome">
      <StaticImage
        src="../images/rss-logo.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Ripple Soundscapes"
        style={{ marginBottom: `1.45rem`, filter: `brightness(1.25)` }}
      />
      <p>Custom mixed ambience for mindfulness and relaxation.</p>
      <div className="link-wrap-as-button">
        <OutboundLink href="https://www.youtube.com/channel/UCfD9H7cYQwoltrxZhtnHhJw">
          Explore the YouTube channel
        </OutboundLink>
      </div>
    </div>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
