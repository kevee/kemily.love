import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Masonry from 'react-masonry-css'
import styled from '@emotion/styled'
import {
  CloseButton,
  ModalContainer,
  ModalWrapper,
} from '../../components/modal'
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
      {selected && (
        <ModalWrapper onClose={() => setSelected(false)}>
          <ModalContainer wide>
            <CloseButton
              onClick={() => {
                setSelected(false)
              }}
            >
              Close
            </CloseButton>
            <LargeImage
              src={`http://kemily-love.s3.us-east-2.amazonaws.com/${selected.Key}`}
              alt=""
            />
            <p>
              By {toTitleCase(selected.Key.split('/')[1].replace('-', ' '))}.{' '}
              <a
                href={`http://kemily-love.s3.us-east-2.amazonaws.com/${selected.Key}`}
                download={selected.Key.split('/').pop()}
              >
                Download image
              </a>
            </p>
          </ModalContainer>
        </ModalWrapper>
      )}
      <Container>
        <ImageMasonry
          breakpointCols={{
            default: 3,
            1100: 2,
            768: 1,
          }}
        >
          {data.allS3ImageAsset.nodes.map((photo) => (
            <ClickableImage>
              <GatsbyImage
                image={getImage(photo)}
                alt=""
                aria-hidden
                onClick={() => {
                  setSelected(photo)
                }}
              />
            </ClickableImage>
          ))}
        </ImageMasonry>
        <PastImageHeader>Past images</PastImageHeader>
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
