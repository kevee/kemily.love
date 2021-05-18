import * as React from 'react'
import Container, { TextContainer } from '../components/container'
import Layout from '../components/layout'

const ChuppahPage = () => (
  <Layout title="Give">
    <Container>
      <TextContainer>
        <h1>Chuppah</h1>
        <p>
          We would love for you to be part of our{' '}
          <a
            href="https://en.wikipedia.org/wiki/Chuppah"
            target="_blank"
            rel="noreferrer"
          >
            Chuppah
          </a>
          ! Send us a square of fabric around one foot by one foot by{' '}
          <strong>September 1, 2021</strong>. You can paint, draw, print, or sew
          your well wishes or images that you remind you of Kemily.
        </p>
        <p>Send your square to:</p>
        <address>
          Kemily
          <br />1 Surf Way
          <br />
          Appartment 137
          <br />
          Monterey, CA 93940
        </address>
      </TextContainer>
    </Container>
  </Layout>
)

export default ChuppahPage
