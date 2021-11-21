import React, { useRef, useEffect, useState } from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import slugify from 'slugify'
import * as filestack from 'filestack-js'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Form = styled.form`
  label {
    font-weight: bold;
    display: block;
  }
  input[type='text'] {
    font-size: 1.1rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
  button {
    background: black;
    color: white;
    border: 0;
    padding: 0.5rem;
    display: inline-block;
    margin-left: 1rem;
    font-size: 1.1rem;
    cursor: pointer;
  }
`

const SharePage = () => {
  const client = filestack.init('AQSvMxRDwQsOXRvgla2Iqz')
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const [ready, setReady] = useState(false)
  const filePickerRef = useRef(false)

  return (
    <Layout title="Share your photos">
      <Container>
        <h1>Share your photos</h1>
        {success ? (
          <p>
            Yay, we have your photos! Thank you so much, and they should appear
            on the website soon. <a href="/share">Upload more photos.</a>
          </p>
        ) : (
          <>
            <p>
              Thank you for celebrating with us during our Love Week! Please
              share any photos you have. These will be posted to the{' '}
              <Link to="/photos">photo page</Link> for anyone to see or
              download.
            </p>
            <Form>
              <label>Your name</label>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
              />

              <button
                onClick={(event) => {
                  event.preventDefault()
                  setReady(true)
                  const options = {
                    uploadInBackground: false,
                    disableStorageKey: true,
                    maxFiles: 200,
                    accept: ['image/*', 'video/*'],
                    disableTransformer: true,
                    cleanupImageExif: {
                      keepOrientation: true,
                      keepICCandAPP: true,
                    },
                    onUploadDone(result) {
                      window.fetch({
                        url:
                          'https://api.netlify.com/build_hooks/6199c44abe4542474242b322',
                        method: 'post',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: '{}',
                      })
                      setSuccess(true)
                    },
                    storeTo: {
                      location: 's3',
                      path: `/photos/${slugify(name)}/`,
                    },
                  }
                  filePickerRef.current = client.picker(options)
                  filePickerRef.current.open()
                }}
              >
                Ready to upload
              </button>
              <div id="filepicker" style={{ width: 500, height: 500 }} />
            </Form>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default SharePage
