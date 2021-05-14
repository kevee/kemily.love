import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import styled from '@emotion/styled'
import breakpoints from '../style/breakpoints'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2V2ZWVtaWxsZXIiLCJhIjoiY2p5cjl0aWRvMDZmYjNjcHUzeDVwOHN3MCJ9.E-R7THevDHSXUosHYYQJwQ'

const ModalButton = styled.button`
  display: inline;
  text-decoration: underline;
  border: 0;
  background: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
`

const Map = styled.div`
  width: 100%;
  height: 60vh;
  margin: 1.5rem 0;
  ${(props) => props.extraMargin && `margin-bottom: 3rem;`}
`

const ModalWrapper = styled.div`
  position: fixed;
  padding: 1.5rem 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  overflow: scroll;
  border: 5px solid black;
  ${breakpoints.large} {
    left: 20vw;
  }
`

const CloseButton = styled.button`
  border: 0;
  float: right;
  background: black;
  color: white;
  cursor: pointer;
`

const ModalContainer = styled.div`
  margin: 0 2rem;
  ${breakpoints.large} {
    max-width: 500px;
    margin: 0 auto;
  }
`

const Modal = ({ children, title, onClose }) => (
  <ModalWrapper aria-modal="true" role="dialog">
    <ModalContainer>
      <CloseButton onClick={() => onClose()}>Close map</CloseButton>
      {title && <h2>{title}</h2>}
    </ModalContainer>
    {children}
  </ModalWrapper>
)

const MapModal = ({ center, title, zoom, directions, content, onClose }) => {
  const mapRef = useRef()

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: `mapbox://styles/keveemiller/ckooaqodv0qid17qtnai9b6an`,
      center: center,
      zoom: zoom,
      minZoom: 3.5,
      maxZoom: 18,
    })
    map.addControl(new mapboxgl.NavigationControl(), 'top-left')
    map.on('load', () => {
      new mapboxgl.Marker().setLngLat(center).addTo(map)
    })
  }, [center, zoom])

  return (
    <Modal onClose={onClose} title={title}>
      <Map ref={mapRef} />
      <ModalContainer>
        {directions && (
          <a href={directions} target="_blank" rel="noreferrer">
            Driving directions
          </a>
        )}
        {content}
      </ModalContainer>
    </Modal>
  )
}

const MapEmbed = ({ center, zoom, onLoad }) => {
  const mapRef = useRef()

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: `mapbox://styles/keveemiller/ckooaqodv0qid17qtnai9b6an`,
      center: center,
      zoom: zoom,
      minZoom: 3.5,
      maxZoom: 18,
    })
    map.addControl(new mapboxgl.NavigationControl(), 'top-left')
    map.on('load', () => {
      onLoad(map, mapboxgl)
    })
  }, [center, zoom])

  return <Map extraMargin ref={mapRef} />
}

export default Modal

export { ModalButton, MapModal, MapEmbed }
