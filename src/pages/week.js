import { Link } from 'gatsby'
import * as React from 'react'
import Container, { TextContainer } from '../components/container'
import Layout from '../components/layout'

const WeekPage = () => (
  <Layout title="Love Week">
    <Container>
      <TextContainer>
        <h1>Love Week</h1>
        <p>
          The celebration begins <strong>October 23 to October 29</strong> with
          a week of activities that we love. We will have a calendar of events,
          which you can sign-up for soon. For now, please let us know your
          expected arrival date in <Link to="/rsvp">the RSVP form</Link>.
          Activities will include:
        </p>

        <ul>
          <li>Argentine-style asado</li>
          <li>Beach bonfire &amp; mussel steam</li>
          <li>Bike ride</li>
          <li>Whale watching</li>
          <li>Surf &amp; beach day</li>
          <li>Big Sur hike</li>
          <li>Pumpkin carving</li>
        </ul>
      </TextContainer>
    </Container>
  </Layout>
)

export default WeekPage
