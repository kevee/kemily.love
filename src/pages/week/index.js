import React, { useState } from 'react'
import { Link } from 'gatsby'
import Container, { TextContainer } from '../../components/container'
import Layout from '../../components/layout'
import { MapModal, ModalButton } from '../../components/modal'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import QRCode from 'react-qr-code'
import breakpoints from '../../style/breakpoints'

const DayHeader = styled.h2`
  margin-bottom: 0.5rem;
  padding-top: 1.5rem;
  border-top: 1.5px solid grey;
  @media print {
    border-top: 0;
  }
`

const PageBreak = styled.div`
  page-break-after: always;
`

const EventHeader = styled.h3`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const EventList = styled.dl`
  dt {
    font-weight: bold;
    clear: both;
    margin-bottom: 0;
    width: 100%;
    ${breakpoints.large} {
      width: 20%;
    }
  }
  dd {
    margin-bottom: 1rem;
    width: 100%;
    ${breakpoints.large} {
      width: 80%;
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
`

const RSVPButton = styled(Link)`
  border: 0;
  background: black;
  color: white !important;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`

const QrCodeWrapper = styled.div`
  display: none;
  @media print {
    display: block;
  }
`

const Event = ({
  title,
  location,
  setLocation,
  time,
  address,
  alternateLocation,
  alternateAddress,
  setAlternateLocation,
  directions = false,
  rsvp = false,
  children,
}) => (
  <>
    <EventHeader>{title}</EventHeader>
    {rsvp && (
      <div>
        <RSVPButton to="/week/rsvp" className="print-hide">
          RSVP here
        </RSVPButton>
      </div>
    )}
    <EventList>
      {location && (
        <div>
          <dt>Location:</dt>
          <dd>
            <ModalButton onClick={() => setLocation()}>{location}</ModalButton>
            {address && (
              <>
                <br />
                {address}
              </>
            )}
          </dd>
        </div>
      )}
      {alternateLocation && (
        <div>
          <dt>Alternate location:</dt>
          <dd>
            <ModalButton onClick={() => setAlternateLocation()}>
              {alternateLocation}
            </ModalButton>
            {alternateAddress && (
              <>
                <br />
                {alternateAddress}
              </>
            )}
          </dd>
        </div>
      )}
      {time && (
        <div>
          <dt>Time:</dt>
          <dd>{time}</dd>
        </div>
      )}
    </EventList>
    {children}
    {directions && (
      <QrCodeWrapper>
        <div>
          <strong>Scan for directions</strong>
        </div>
        <QRCode value={directions} size={200} />
      </QrCodeWrapper>
    )}
  </>
)

const PrintHeader = styled.div`
  display: none;
`

const PrintButton = styled.button`
  cursor: pointer;
  background: black;
  display: inline-block;
  padding: 0.5rem;
  color: white;
  border: none;
`

const WeekPage = () => {
  const [currentMap, setCurrentMap] = useState(false)

  return (
    <Layout title="Love Week">
      <Global
        styles={css`
          @media print {
            header,
            footer {
              display: none;
            }
            .print-hide {
              display: none !important;
            }
            .print-show {
              display: block !important;
            }
            a,
            a:visited {
              color: black !important;
              text-decoration: none !important;
            }
          }
        `}
      />
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
          <PrintHeader className="print-show">
            <h1>Kevin &amp; Emily's Love Week</h1>
            <p>More at https://kemily.love/week</p>
          </PrintHeader>
          <h1 className="print-hide">Love Week</h1>
          <p className="print-hide">
            We are so thrilled that you will be joining us for all or part of
            our Love Week and our Love Party! It is right around the corner and
            we are so excited to share some of our favorite Monterey area
            activities with you all.{' '}
          </p>
          <p className="print-hide">
            <PrintButton
              onClick={() => {
                window.print()
              }}
            >
              Print this schedule
            </PrintButton>
          </p>
          <DayHeader id="oct-24">Sunday, October 24</DayHeader>
          <Event
            title="Play-in-a-day"
            location="Search Ranch"
            address="21621 Tassajara Rd, Carmel Valley, CA"
            directions="https://www.google.com/maps/dir/36.6013782,-121.8676458/21621+Tassajara+Rd,+Carmel+Valley,+CA+93924/@36.4986584,-121.8868147,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8092768731669f87:0xf84c11ada75d67c3!2m2!1d-121.5805132!2d36.3955193"
            setLocation={() => {
              setCurrentMap({
                center: [-121.5827019, 36.3955193],
                zoom: 14,
                title: 'Search Ranch',
                directions:
                  'https://www.google.com/maps/dir/36.6013782,-121.8676458/21621+Tassajara+Rd,+Carmel+Valley,+CA+93924/@36.4986584,-121.8868147,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8092768731669f87:0xf84c11ada75d67c3!2m2!1d-121.5805132!2d36.3955193',
                content: (
                  <>
                    <p>
                      Turn right on Tassajara Road from Carmel Valley Road. You
                      will see signs soon on the left directing you.
                    </p>
                  </>
                ),
              })
            }}
            time="Potluck at 5pm, show starts at 6pm"
          >
            <p>
              The tradition of a group of friends putting on a single classical
              play in a single day continues. This year, we will be enthralling
              the audience with a rendition of Shakespeare's <em>Macbeth</em> in
              1980s Wall Street.
            </p>
            <p>
              If you would like to help acting in or playing a supporting role
              in this produciton, we will be at Search Ranch starting at 10am.
              We'll be having a potluck for cast, crew, and audience members at
              5pm, and show starts 6pm!
            </p>
          </Event>
          <PageBreak />
          <DayHeader id="oct-25">Monday, October 25</DayHeader>
          <Event
            title="Pickleball tournament"
            location="Via Paraiso Park"
            address="Herrmann Drive and Via Paraiso, Monterey, CA"
            directions="https://www.google.com/maps/dir//Via+Paraiso+Park,+V%C3%ADa+Paraiso,+Monterey,+CA+93940/@36.5931603,-121.9055972,15z/data=!4m16!1m6!3m5!1s0x0:0xff9a068f9c0ffdcc!2sVia+Paraiso+Park!8m2!3d36.5931603!4d-121.9055972!4m8!1m0!1m5!1m1!1s0x808de69c44c67927:0xff9a068f9c0ffdcc!2m2!1d-121.9055972!2d36.5931603!3e2"
            setLocation={() => {
              setCurrentMap({
                center: [-121.9055972, 36.5931603],
                zoom: 14,
                title: 'Via Paraiso Park',
                directions:
                  'https://www.google.com/maps/dir//Via+Paraiso+Park,+V%C3%ADa+Paraiso,+Monterey,+CA+93940/@36.5931603,-121.9055972,15z/data=!4m16!1m6!3m5!1s0x0:0xff9a068f9c0ffdcc!2sVia+Paraiso+Park!8m2!3d36.5931603!4d-121.9055972!4m8!1m0!1m5!1m1!1s0x808de69c44c67927:0xff9a068f9c0ffdcc!2m2!1d-121.9055972!2d36.5931603!3e2',
                content: <></>,
              })
            }}
            time="9am — 12pm"
          >
            <p>
              Bring pickleball paddles and balls if you have them! We will
              rotate and share what we’ve got. There is also a playground and a
              field at the park for little ones to run around.
            </p>
          </Event>

          <PageBreak />
          <DayHeader id="oct-26"> Tuesday, October 26</DayHeader>
          <Event
            title="Bike ride from Fisherman’s Wharf to Marina Dunes"
            location="Fisherman’s Wharf, Monterey"
            address="1 Old Fisherman’s Wharf, Monterey, CA"
            directions="https://www.google.com/maps/dir//Old+Fisherman's+Wharf,+1+Old+Fisherman%E2%80%99s+Wharf,+Monterey,+CA+93940/@36.6037219,-121.8933288,15z/data=!4m16!1m6!3m5!1s0x0:0xdc0b163254a641c7!2sOld+Fisherman's+Wharf!8m2!3d36.6036666!4d-121.893319!4m8!1m0!1m5!1m1!1s0x808de41880edf8cd:0xdc0b163254a641c7!2m2!1d-121.893319!2d36.6036666!3e2"
            setLocation={() => {
              setCurrentMap({
                center: [-121.893424, 36.603621],
                zoom: 14,
                title: "Old Fisherman's Wharf",
                directions:
                  "https://www.google.com/maps/dir//Old+Fisherman's+Wharf,+1+Old+Fisherman%E2%80%99s+Wharf,+Monterey,+CA+93940/@36.6037219,-121.8933288,15z/data=!4m16!1m6!3m5!1s0x0:0xdc0b163254a641c7!2sOld+Fisherman's+Wharf!8m2!3d36.6036666!4d-121.893319!4m8!1m0!1m5!1m1!1s0x808de41880edf8cd:0xdc0b163254a641c7!2m2!1d-121.893319!2d36.6036666!3e2",
                content: (
                  <>
                    <p>Meet in front of Old Fisherman's Wharf.</p>
                  </>
                ),
              })
            }}
            time="Meet at 1pm"
          >
            <p>
              Bike rentals area available for $40/day from{' '}
              <a href="https://adventuresbythesea.com/">
                Adventures By the Sea
              </a>
              , 210 Alvarado St, Monterey
            </p>
          </Event>

          <PageBreak />
          <DayHeader id="oct-27">Wednesday, October 27</DayHeader>
          <p>
            We will choose between plan A and B for part 1 as we get closer to
            the event and can forecast conditions!
          </p>
          <Event
            title="Water Wednesday, Part 1 (Plan A): surf, boogie board, snorkel or just splash around!"
            location="Asilomar State Beach"
            address="Sunset Dr and Asilomar Beach trail, Pacific Grove, CA"
            directions="https://www.google.com/maps/dir//Asilomar+State+Beach,+Sunset+Dr,+Pacific+Grove,+CA+93950/@36.6180088,-121.9419115,15z/data=!4m16!1m6!3m5!1s0x0:0xbd02e27eb1cc42b8!2sAsilomar+State+Beach!8m2!3d36.6180088!4d-121.9419115!4m8!1m0!1m5!1m1!1s0x808de125fdd7c0f5:0xbd02e27eb1cc42b8!2m2!1d-121.9419115!2d36.6180088!3e2"
            setLocation={() => {
              setCurrentMap({
                center: [-121.941165, 36.618833],
                zoom: 14,
                title: 'Asilomar Beach',
                directions:
                  'https://www.google.com/maps/dir//Asilomar+State+Beach,+Sunset+Dr,+Pacific+Grove,+CA+93950/@36.6180088,-121.9419115,15z/data=!4m16!1m6!3m5!1s0x0:0xbd02e27eb1cc42b8!2sAsilomar+State+Beach!8m2!3d36.6180088!4d-121.9419115!4m8!1m0!1m5!1m1!1s0x808de125fdd7c0f5:0xbd02e27eb1cc42b8!2m2!1d-121.9419115!2d36.6180088!3e2',
                content: (
                  <>
                    <p>Meet on the beach of Asilomar.</p>
                  </>
                ),
              })
            }}
            alternateLocation="Carmel State Beach"
            alternateAddress="8th Ave and Scenic Rd, Carmel, CA"
            setAlternateLocation={() => {
              setCurrentMap({
                center: [-121.928781, 36.552483],
                zoom: 14,
                title: 'Carmel State Beach 8th street entrance',
                directions:
                  'https://www.google.com/maps/dir//Carmel+Beach,+Scenic+Rd,+Carmel-By-The-Sea,+CA+93923/@36.5523329,-121.9286323,101m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x808de717bb4ff291:0x8f8fae2b0d28ec72!2m2!1d-121.9287101!2d36.5524694!3e2',
                content: (
                  <>
                    <p>Meet near the 8th street entrance.</p>
                  </>
                ),
              })
            }}
            time="1pm — 6pm"
          >
            <p>
              Board and wetsuit rentals $15-30/day from{' '}
              <a href="http://onthebeachsurfshop.com/">
                On the Beach Surf Shop
              </a>
              , 693 Lighthouse Ave, Monterey.
            </p>
          </Event>

          <Event
            title="Water Wednesday, Part 1 (Plan B): Kayak or stand-up paddle board"
            location="On the beach in front of Monterey Bay Kayaks"
            address="693 Del Monte Ave, Monterey, CA 93940"
            directions="https://www.google.com/maps/dir//monterey+bay+kayaks+monterey+ca/@36.5913751,-121.8906389,15z/data=!3m1!5s0x808de43c840181a9:0xe7c5bbbc4e6af616!4m8!4m7!1m0!1m5!1m1!1s0x808de43c9134103f:0xee1bedb7ac00da4b!2m2!1d-121.8880403!2d36.6005081"
            setLocation={() => {
              setCurrentMap({
                center: [-121.888107, 36.60026],
                zoom: 14,
                title: 'Monterey Bay Kayaks',
                directions:
                  'https://www.google.com/maps/dir//monterey+bay+kayaks+monterey+ca/@36.5913751,-121.8906389,15z/data=!3m1!5s0x808de43c840181a9:0xe7c5bbbc4e6af616!4m8!4m7!1m0!1m5!1m1!1s0x808de43c9134103f:0xee1bedb7ac00da4b!2m2!1d-121.8880403!2d36.6005081',
                content: (
                  <>
                    <p>Meet in front of Monterey Bay Kayaks.</p>
                  </>
                ),
              })
            }}
            time="10am — whenever!"
          >
            <p>
              Watercraft rentals $35-45 (4 hours) from{' '}
              <a href="https://www.montereybaykayaks.com/">
                Monterey Bay Kayaks
              </a>
              , 693 Del Monte Avenue, Monterey
            </p>
          </Event>

          <Event
            title="Water Wednesday, Part 2: beach bonfire with clam
            bake and pizza dinner"
            location="Asilomar State Beach"
            address="Sunset Dr and Asilomar Beach trail, Pacific Grove, CA"
            directions="https://www.google.com/maps/dir//Asilomar+State+Beach,+Sunset+Dr,+Pacific+Grove,+CA+93950/@36.6180088,-121.9419115,15z/data=!4m16!1m6!3m5!1s0x0:0xbd02e27eb1cc42b8!2sAsilomar+State+Beach!8m2!3d36.6180088!4d-121.9419115!4m8!1m0!1m5!1m1!1s0x808de125fdd7c0f5:0xbd02e27eb1cc42b8!2m2!1d-121.9419115!2d36.6180088!3e2"
            setLocation={() => {
              setCurrentMap({
                center: [-121.941165, 36.618833],
                zoom: 14,
                title: 'Asilomar Beach',
                directions:
                  'https://www.google.com/maps/dir//Asilomar+State+Beach,+Sunset+Dr,+Pacific+Grove,+CA+93950/@36.6180088,-121.9419115,15z/data=!4m16!1m6!3m5!1s0x0:0xbd02e27eb1cc42b8!2sAsilomar+State+Beach!8m2!3d36.6180088!4d-121.9419115!4m8!1m0!1m5!1m1!1s0x808de125fdd7c0f5:0xbd02e27eb1cc42b8!2m2!1d-121.9419115!2d36.6180088!3e2',
                content: (
                  <>
                    <p>Meet on the beach of Asilomar.</p>
                  </>
                ),
              })
            }}
            alternateLocation="Carmel State Beach"
            alternateAddress="8th Ave and Scenic Rd, Carmel, CA"
            setAlternateLocation={() => {
              setCurrentMap({
                center: [-121.928781, 36.552483],
                zoom: 14,
                title: 'Carmel State Beach 8th street entrance',
                directions:
                  'https://www.google.com/maps/dir//Carmel+Beach,+Scenic+Rd,+Carmel-By-The-Sea,+CA+93923/@36.5523329,-121.9286323,101m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x808de717bb4ff291:0x8f8fae2b0d28ec72!2m2!1d-121.9287101!2d36.5524694!3e2',
                content: (
                  <>
                    <p>Meet near the 8th street entrance.</p>
                  </>
                ),
              })
            }}
            time="6pm — whenever!"
          >
            <p>
              Meet at Carmel State Beach or Asilomar State Beach (depending on
              conditions, we will send an update){' '}
            </p>
          </Event>

          <PageBreak />
          <DayHeader id="oct-28">Thursday, October 28</DayHeader>
          <Event
            title="Whale watching cruise from Monterey Harbor"
            location="Monterey Bay Whale Watch on Fisherman’s Wharf"
            address="84 Fishermans Wharf, Monterey, CA"
            directions="https://www.google.com/maps/dir//Monterey+Bay+Whale+Watch,+84+Fishermans+Wharf,+Monterey,+CA+93940/@36.60487,-121.892087,15z/data=!4m16!1m6!3m5!1s0x0:0x4efea38d1612b19f!2sMonterey+Bay+Whale+Watch!8m2!3d36.60487!4d-121.892087!4m8!1m0!1m5!1m1!1s0x808de41866710ba3:0x4efea38d1612b19f!2m2!1d-121.892087!2d36.60487!3e2"
            rsvp={true}
            setLocation={() => {
              setCurrentMap({
                center: [-121.892165, 36.604759],
                zoom: 14,
                title: 'Monterey Bay Whale Watch',
                directions:
                  'https://www.google.com/maps/dir//Monterey+Bay+Whale+Watch,+84+Fishermans+Wharf,+Monterey,+CA+93940/@36.60487,-121.892087,15z/data=!4m16!1m6!3m5!1s0x0:0x4efea38d1612b19f!2sMonterey+Bay+Whale+Watch!8m2!3d36.60487!4d-121.892087!4m8!1m0!1m5!1m1!1s0x808de41866710ba3:0x4efea38d1612b19f!2m2!1d-121.892087!2d36.60487!3e2',
                content: (
                  <>
                    <p>
                      Meet in front of{' '}
                      <a href="https://montereybaywhalewatch.com/">
                        Monterey Bay Whale Watch
                      </a>{' '}
                      on Old Fisherman's Wharf.
                    </p>
                  </>
                ),
              })
            }}
            time={
              <>
                Meet at Monterey Bay Whale Watch on Fisherman’s Wharf at 8:30am
                <br />
                On the Water 9am - 1pm
              </>
            }
          >
            <p>$50/person</p>
          </Event>

          <PageBreak />
          <DayHeader id="oct-29">Friday, October 29</DayHeader>
          <Event
            title="Hike up Buzzard’s Roost in Big Sur"
            location="Pfeiffer Big Sur State Park, Day Use Parking Lot # 2"
            address="Pfeiffer Big Sur Rd, Big Sur, CA"
            directions="https://www.google.com/maps/dir//Day+Use+Lot+%232,+Pfeiffer+Big+Sur+Rd,+Big+Sur,+CA+93920/@36.2503408,-121.7810923,15z/data=!4m16!1m6!3m5!1s0x0:0x8c9f45bbfd5c5d20!2sDay+Use+Lot+%232!8m2!3d36.2503408!4d-121.7810923!4m8!1m0!1m5!1m1!1s0x808d856c68df2cf3:0x8c9f45bbfd5c5d20!2m2!1d-121.7810923!2d36.2503408!3e2"
            setLocation={() => {
              setCurrentMap({
                center: [-121.7812442, 36.2503249],
                zoom: 14,
                title: 'Pfeiffer Big Sur',
                directions:
                  'https://www.google.com/maps/dir//Day+Use+Lot+%232,+Pfeiffer+Big+Sur+Rd,+Big+Sur,+CA+93920/@36.2503408,-121.7810923,15z/data=!4m16!1m6!3m5!1s0x0:0x8c9f45bbfd5c5d20!2sDay+Use+Lot+%232!8m2!3d36.2503408!4d-121.7810923!4m8!1m0!1m5!1m1!1s0x808d856c68df2cf3:0x8c9f45bbfd5c5d20!2m2!1d-121.7810923!2d36.2503408!3e2',
                content: (
                  <>
                    <p>Meet in Day Use Parking Lot #2.</p>
                  </>
                ),
              })
            }}
            time="3pm — 6pm"
          >
            <p>
              Three miles roundtrip (
              <a href="https://www.alltrails.com/trail/us/california/buzzards-roost-trail">
                trail map
              </a>
              )- this moderate to strenuous loop hike follows the Big Sur River
              then climbs through shady redwoods to an exposed sunny ridge with
              a panoramic view of the ocean, Sycamore Canyon and the Santa Lucia
              Mountains. Starts across the river from the Redwood Deck. Total
              elevation gain is about 750 feet.{' '}
            </p>
          </Event>

          <Event
            title="Pumpkin carving and marshmallow roasting in Big Sur"
            location="Pfeiffer Big Sur State Park, Campsite #106"
            address="Pfeiffer Big Sur Rd, Big Sur, CA"
            directions="https://www.google.com/maps/dir//Pfeiffer+Big+Sur+Campground,+Pfeiffer+Big+Sur+Rd,+Big+Sur,+CA+93920/@36.2428576,-121.7767427,15z/data=!4m16!1m6!3m5!1s0x0:0xcebbb5c1ea476a7b!2sPfeiffer+Big+Sur+Campground!8m2!3d36.2428576!4d-121.7767427!4m8!1m0!1m5!1m1!1s0x808d8511e3187d39:0xcebbb5c1ea476a7b!2m2!1d-121.7767427!2d36.2428576!3e2"
            setLocation={() => {
              setCurrentMap({
                center: [-121.772157, 36.246331],
                zoom: 14,
                title: 'Campsite #106',
                directions:
                  'https://www.google.com/maps/dir//Pfeiffer+Big+Sur+Campground,+Pfeiffer+Big+Sur+Rd,+Big+Sur,+CA+93920/@36.2428576,-121.7767427,15z/data=!4m16!1m6!3m5!1s0x0:0xcebbb5c1ea476a7b!2sPfeiffer+Big+Sur+Campground!8m2!3d36.2428576!4d-121.7767427!4m8!1m0!1m5!1m1!1s0x808d8511e3187d39:0xcebbb5c1ea476a7b!2m2!1d-121.7767427!2d36.2428576!3e2',
                content: (
                  <>
                    <p>Meet in Campsite #106.</p>
                  </>
                ),
              })
            }}
            time="6pm — whenever!"
          ></Event>

          <DayHeader id="oct-30">Saturday, October 30</DayHeader>
          <p>
            <Link to="/party">The Love Party!</Link> (we’ll see you all there!)
          </p>
          <PageBreak />
          <DayHeader id="oct-31">Sunday, October 31</DayHeader>
          <Event
            title="Halloween float and brunch picnic"
            location="Lovers Point Park"
            address="631 Ocean View Blvd, Pacific Grove, CA"
            directions="https://www.google.com/maps/dir//Lovers+Point+Park,+631+Ocean+View+Blvd,+Pacific+Grove,+CA+93950/@36.6261619,-121.9163682,15z/data=!4m16!1m6!3m5!1s0x0:0x48028ef2b9b860bb!2sLovers+Point+Park!8m2!3d36.6261619!4d-121.9163682!4m8!1m0!1m5!1m1!1s0x808de145db4dcb25:0x48028ef2b9b860bb!2m2!1d-121.9163682!2d36.6261619!3e2"
            setLocation={() => {
              setCurrentMap({
                center: [-121.916704, 36.626087],
                zoom: 14,
                title: 'Lovers Point',
                directions:
                  'https://www.google.com/maps/dir//Lovers+Point+Park,+631+Ocean+View+Blvd,+Pacific+Grove,+CA+93950/@36.6261619,-121.9163682,15z/data=!4m16!1m6!3m5!1s0x0:0x48028ef2b9b860bb!2sLovers+Point+Park!8m2!3d36.6261619!4d-121.9163682!4m8!1m0!1m5!1m1!1s0x808de145db4dcb25:0x48028ef2b9b860bb!2m2!1d-121.9163682!2d36.6261619!3e2',
                content: (
                  <>
                    <p>Meet in the park area of Lover's Point.</p>
                  </>
                ),
              })
            }}
            time="1 pm — whenever!"
          >
            <p>
              Bring your Halloween costumes, wetsuits and ocean toys, and a
              blanket or chair to sit on.
            </p>
          </Event>
        </TextContainer>
      </Container>
    </Layout>
  )
}

export default WeekPage
