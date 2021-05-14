import React, { useEffect, useRef } from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

const RSVPPage = () => {
  const iframeRef = useRef()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
  }, [])

  return (
    <Layout title="RSVP">
      <Helmet>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      </Helmet>
      <Container>
        <iframe
          ref={iframeRef}
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrYf6NpfPdvkXMDc?backgroundColor=red"
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

export default RSVPPage
