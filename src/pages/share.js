import React, { useRef, useEffect, useState } from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import slugify from 'slugify'
import * as filestack from 'filestack-js'

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
          <p>Yay, we have your photos! </p>
        ) : (
          <form>
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
                  onUploadDone(result) {
                    console.log(result)
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
          </form>
        )}
      </Container>
    </Layout>
  )
}

export default SharePage
