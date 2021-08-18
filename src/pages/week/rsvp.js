import React, { useEffect, useRef } from 'react'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { Helmet } from 'react-helmet'

const RSVPWeekPage = () => {
  const iframeRef = useRef()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
  }, [])

  return (
    <Layout title="Love Week RSVP">
      <Helmet>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      </Helmet>
      <Container>
        <iframe
          ref={iframeRef}
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrOHd8790r8AD6Pe?backgroundColor=white"
          frameborder="0"
          title="RSVPform"
          onmousewheel=""
          width="100%"
          height="533"
        ></iframe>
      </Container>
    </Layout>
  )
}

export default RSVPWeekPage
