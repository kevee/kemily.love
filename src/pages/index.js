import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import breakpoints from '../style/breakpoints'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Kemily = styled.div`
  padding: 2rem 1.5rem;
  ${breakpoints.small} {
    position: absolute;
    top: 0;
    right: 2rem;
    bottom: 0;
    z-index: 1;
    width: 50vw;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.5);
  }
`

const HeroWrapper = styled.div`
  position: relative;
`

const Hero = () => (
  <HeroWrapper>
    <StaticImage
      src="../images/background.jpg"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fullWidth"
      quality={75}
    />
    <Kemily>
      <h1>Kevin &amp; Emily are having a Love Party!!</h1>
      <p>
        Please <Link to="/party">join us October 30</Link> for a celebration of
        love in Big Sur, California.
      </p>
      <p>
        Be part of our Love Party regardless of where you are by{' '}
        <Link to="/chuppah">adding to our chuppah</Link>.
      </p>
    </Kemily>
  </HeroWrapper>
)

const IndexPage = () => (
  <Layout hasHero>
    <Hero />
  </Layout>
)

export default IndexPage
