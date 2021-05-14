import React, { useState } from 'react'
import { Link } from 'gatsby'
import Container, { TextContainer } from '../components/container'
import { MapModal, ModalButton, MapEmbed } from '../components/modal'
import TableOfContents from '../components/toc'
import Layout from '../components/layout'

const pfeifferDirections = {
  center: [-121.7862583, 36.249544],
  zoom: 14,
  title: 'Pfeiffer Big Sur State Park',
  directions: 'https://www.google.com/maps/dir//pfeiffer+big+sur+state+park',
  content: (
    <>
      <p>
        Take Highway 1 south from the Monterey Peninsula and turn left into the
        Pfeiffer Big Sur state park. The park is clearly signed, and is around
        25 miles south of Carmel Valley.
      </p>
    </>
  ),
}

const loversPointDirections = {
  center: [-121.916639, 36.626099],
  zoom: 12,
  title: "Lover's Point",
  directions: 'https://www.google.com/maps/dir//lovers+point+pacific+grove',
  content: (
    <>
      <p>
        Lover's Point is along the north end of Pacific Grove. There are several
        parking areas and on-street parking in the neighborhood. We will make
        ourselves highly visible.
      </p>
    </>
  ),
}

const mapMarkers = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        description: 'Main Entrance',
        icon: 'car-15',
      },
      geometry: {
        type: 'Point',
        coordinates: [-121.787326, 36.252845],
      },
    },
    {
      type: 'Feature',
      properties: {
        description: 'Love Party, Picnic Area C',
        icon: 'picnic-site-15',
      },
      geometry: {
        type: 'Point',
        coordinates: [-121.776808, 36.244851],
      },
    },
    {
      type: 'Feature',
      properties: {
        description: 'Reserved campgrounds',
        icon: 'campsite-15',
      },
      geometry: {
        type: 'Point',
        coordinates: [-121.772844, 36.245212],
      },
    },
    {
      type: 'Feature',
      properties: {
        description: 'Parking',
        icon: 'car-15',
      },
      geometry: {
        type: 'Point',
        coordinates: [-121.775642, 36.244769],
      },
    },
  ],
}

const PartyPage = () => {
  const [currentMap, setCurrentMap] = useState(false)
  return (
    <Layout title="Love Party">
      {currentMap && (
        <MapModal
          {...currentMap}
          onClose={() => {
            setCurrentMap(false)
          }}
        />
      )}
      <Container>
        <TextContainer>
          <TableOfContents
            links={[
              <Link to="#plans">Plans</Link>,
              <Link to="#lodging">Lodging</Link>,
              <Link to="#map">Map &amp; directions</Link>,
            ]}
          />
          <h2 id="plans">Plans</h2>
          <h3>October 29: Day before the Love Party</h3>
          <p>
            We welcome you to arrive in Big Sur the day before the Love Party.
            Campers will be able to check into the campsites at{' '}
            <ModalButton
              onClick={() => {
                setCurrentMap(pfeifferDirections)
              }}
            >
              Pfeiffer Big Sur State Park
            </ModalButton>{' '}
            after [x hours]. We will plan a short afternoon hike nearby for
            anyone who wants to join.
          </p>

          <p>
            Kevin and Emily will be staying at the campground. Come by for
            pumpkin carving and marshmallow roasting after sunset.
          </p>
          <h3>October 30: Love Party Day</h3>
          <h4>When and where</h4>

          <p>
            Please arrive at Picnic Area C at{' '}
            <ModalButton
              onClick={() => {
                setCurrentMap(pfeifferDirections)
              }}
            >
              Pfeiffer Big Sur State Park
            </ModalButton>{' '}
            at 11am. The ceremony will begin at 1pm. Food and refreshments will
            be provided all afternoon. Love Party Lawn Games will take place in
            the nearby softball field before and after the ceremony. The party
            at the picnic area will end at 5pm.
          </p>

          <h4>Parking</h4>

          <p>Carpooling is encouraged, as we have limited parking permits. </p>

          <h4>What to bring and what to wear</h4>

          <p>
            Suggested dress code is your interpretation of “Forest Fancy”.
            Basically, wear something that makes you feel fabulous and
            functional for this all-day, outdoor event. We recommend layers and
            comfortable footwear.{' '}
          </p>

          <p>If you feel inspired, please also bring:</p>

          <ul>
            <li>
              Your favorite Smorgasbord items to share. Large wheels of cheeses
              encouraged!
            </li>
            <li>Lawn games to share</li>
            <li>Fun pictures of you with Emily &amp; Kevin</li>
            <li>A Halloween costume </li>
            <li>Camping chairs</li>
          </ul>
          <h3>October 31: Love Party Hallowedding Float</h3>
          <p>
            We will pack up the party and head to{' '}
            <ModalButton
              onClick={() => {
                setCurrentMap(loversPointDirections)
              }}
            >
              Lover's Point
            </ModalButton>{' '}
            in the afternoon for a Halloween costume float. Bring along:
          </p>
          <ul>
            <li>Halloween costume</li>
            <li>Snorkel gear</li>
            <li>Snacks to share</li>
            <li>Blankets</li>
            <li>Anything that floats in the ocean</li>
          </ul>
          <h2 id="lodging">Lodging</h2>
          <p>
            There are several options for lodging the night of October 29 and
            30.
          </p>
          <h3>Camping</h3>
          <p>
            Come join us for camping at Pfeiffer Big Sur State Park. If you
            indicate you’d like to camp in the RSVP form, you’ll get more
            information closer to the event.
          </p>
          <h3>Lodging in Big Sur</h3>
          <p>
            There are a few hotels in Big Sur that are very close to the Love
            Party:
          </p>
          <ul>
            <li>
              <a
                href="https://www.fernwoodbigsur.com/"
                target="_blank"
                rel="noreferrer"
              >
                Fernwood
              </a>
            </li>
            <li>
              <a
                href="https://www.bigsurlodge.com/"
                target="_blank"
                rel="noreferrer"
              >
                Big Sur Lodge
              </a>
            </li>
            <li>
              <a
                href="https://www.bigsurriverinn.com/"
                target="_blank"
                rel="noreferrer"
              >
                Big Sur River Inn
              </a>
            </li>
            <li>
              <a
                href="https://www.deetjens.com/"
                target="_blank"
                rel="noreferrer"
              >
                Deetjen’s Big Sur Inn
              </a>
            </li>
            <li>
              <a
                href="https://glenoaksbigsur.com/"
                target="_blank"
                rel="noreferrer"
              >
                Glen Oaks Big Sur
              </a>
            </li>
          </ul>
          <h3>Lodging in Monterey Peninsula</h3>
          <p>
            The Monterey Peninsula is a beautiful 30 minute drive away from the
            Love Party and has plenty of options. If you need recommendations,{' '}
            <a href="mailto:us@kemily.love">contact Kevin &amp; Emily</a>.
          </p>
          <h2 id="map">Map &amp; Directions</h2>
        </TextContainer>
        <TextContainer>
          <h3>Love Party</h3>
          <p>
            Get{' '}
            <a
              href={pfeifferDirections.directions}
              target="_blank"
              rel="noreferrer"
            >
              driving directions to Pfeiffer Big Sur State Park
            </a>{' '}
            for our Love Party <strong>October 29 — 30</strong>. You can also{' '}
            <a href="https://www.parks.ca.gov/pages/570/files/PfeifferBigSurSPFinalWebLayout012016.pdf">
              download a helpful brochure with a detailed map
            </a>
            .
          </p>
        </TextContainer>
        <MapEmbed
          center={[-121.779131, 36.2483]}
          zoom={14}
          onLoad={(map) => {
            map.addSource('places', {
              type: 'geojson',
              data: mapMarkers,
            })

            map.addLayer({
              id: 'poi-labels',
              type: 'symbol',
              source: 'places',
              layout: {
                'text-field': ['get', 'description'],
                'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                'text-radial-offset': 0.5,
                'text-justify': 'auto',
                'icon-image': ['get', 'icon'],
              },
            })
          }}
        />
        <TextContainer>
          <h3>Lover's Point</h3>
          <p>
            Get{' '}
            <a
              href={pfeifferDirections.directions}
              target="_blank"
              rel="noreferrer"
            >
              driving directions to Lover's Point
            </a>{' '}
            for our Halloween float on <strong>October 31</strong>.
          </p>
        </TextContainer>
        <MapEmbed
          center={loversPointDirections.center}
          zoom={12}
          onLoad={(map, mapboxgl) => {
            new mapboxgl.Marker()
              .setLngLat(loversPointDirections.center)
              .addTo(map)
          }}
        />
      </Container>
    </Layout>
  )
}

export default PartyPage
