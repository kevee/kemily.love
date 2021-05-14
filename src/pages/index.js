import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import { Link } from 'gatsby'

const Kemily = styled.h1`
  position: absolute;
  top: 3rem;
  right: 3rem;
  z-index: 1;
`

const HeroWrapper = styled.div`
  position: relative;
`

const Hero = () => (
  <HeroWrapper>
    <Kemily>Kevin Miller &amp; Emily Gottlieb</Kemily>
    <StaticImage
      src="../images/background.jpg"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fullWidth"
      quality={75}
    />
  </HeroWrapper>
)

const IndexPage = () => (
  <Layout hideHeader>
    <Hero />
    <Header hideKemily />
    <Container>
      <h1>Kevin &amp; Emily are having a Love Party!!</h1>
      <p>
        Please <Link to="/party">join us October 30</Link> for a celebration of
        love in Big Sur, California.
      </p>
    </Container>
  </Layout>
)

export default IndexPage
