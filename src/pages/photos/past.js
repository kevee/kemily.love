import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Masonry from 'react-masonry-css'
import styled from '@emotion/styled'
import '@reach/dialog/styles.css'
import Layout from '../../components/layout'
import Container from '../../components/container'

const ImageMasonry = styled(Masonry)`
  display: flex;
  margin-left: -1rem;
  width: auto;
  .my-masonry-grid_column {
    padding-left: 1rem; /* gutter size */
    background-clip: padding-box;
  }

  & > div {
  }
`

const ClickableImage = styled.div`
  cursor: pointer;
`

const LargeImage = styled.img`
  margin-top: 0.5rem;
  margin-bottom: 0;
`

const toTitleCase = (str) =>
  str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })

const PhotosPage = () => {
  const [selected, setSelected] = useState()
  const data = useStaticQuery(graphql`
    {
      allS3ImageAsset {
        nodes {
          childImageSharp {
            gatsbyImageData(
              width: 900
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          Key
        }
      }
      allAirtable(filter: { table: { in: ["RSVP", "Website photos"] } }) {
        nodes {
          data {
            Photos {
              localFiles {
                childImageSharp {
                  gatsbyImageData(
                    width: 900
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          table
        }
      }
    }
  `)
  let photos = []
  data.allAirtable.nodes.forEach(({ data }) => {
    if (typeof data.Photos !== 'undefined' && data.Photos) {
      photos = [...photos, ...data.Photos.localFiles]
    }
  })

  return (
    <Layout title="Photos">
      <Container>
        <ImageMasonry
          breakpointCols={{
            default: 3,
            1100: 2,
            768: 1,
          }}
        >
          {photos.map((photo) => (
            <div>
              <GatsbyImage image={getImage(photo)} alt="" aria-hidden />
            </div>
          ))}
        </ImageMasonry>
      </Container>
    </Layout>
  )
}

export default PhotosPage
