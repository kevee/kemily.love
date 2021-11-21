import React, { useEffect, useState } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Masonry from 'react-masonry-css'
import styled from '@emotion/styled'
import {
  CloseButton,
  ModalContainer,
  ModalWrapper,
} from '../../components/modal'
import Layout from '../../components/layout'
import Container from '../../components/container'
import colors from '../../style/colors'

const ImageMasonry = styled(Masonry)`
  display: flex;
  margin-left: -1rem;
  width: auto;
  .my-masonry-grid_column {
    padding-left: 1rem; /* gutter size */
    background-clip: padding-box;
  }
`

const ClickableImage = styled.div`
  cursor: pointer;
  &:hover {
    img {
      border: 8px solid ${colors.rose};
      box-sizing: border-box;
    }
  }
`

const toTitleCase = (str) =>
  str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })

const PhotosPage = ({ data }) => {
  const [selected, setSelected] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <Layout title="Photos">
      {hasMounted && (
        <>
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
                <GatsbyImage
                  sty
                  image={getImage(selected)}
                  alt=""
                  aria-hidden
                />
                <p>
                  By {toTitleCase(selected.Key.split('/')[1].replace('-', ' '))}
                  .{' '}
                  <a href={`/download-photo/${selected.Key}`} download>
                    Download image
                  </a>
                </p>
              </ModalContainer>
            </ModalWrapper>
          )}
          <Container>
            <h1>Shared photos from Love Week</h1>
            <p>
              Below are all the wonderful pictures that people took throughout
              The Love Week.
              <br />
              Click on any image to download. <br />
              <Link to="/share">Share your own photos</Link>
            </p>
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
          </Container>
        </>
      )}
    </Layout>
  )
}

export default PhotosPage

export const query = graphql`
  {
    allS3ImageAsset {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
        Key
      }
    }
  }
`
