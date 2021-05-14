import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import Container from './container'
import { rose, green } from '../style/colors'
import '@reach/skip-nav/styles.css'

const HeaderWrapper = styled.header`
  font-family: Spectral, Georgia, serif;
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1.5px solid black;
  background: ${rose};
  ${(props) => props.hasHero && `margin-bottom: 0;`}
  ul {
    list-style-type: none;
    margin: 1rem 0 0 0;
    padding: 0;
    display: flex;
    li {
      display: inline-block;
      margin-right: 1.5rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const Kemily = styled(Link)`
  color: black;
`

const Header = ({ hideKemily = false, hasHero = false }) => (
  <>
    <SkipNavLink />
    <HeaderWrapper hasHero={hasHero}>
      <Container>
        {!hideKemily && (
          <Kemily to="/">Kevin Miller &amp; Emily Gottlieb</Kemily>
        )}
        <nav>
          <ul>
            <li>
              <Link to="/party">Love Party</Link>
            </li>
            <li>
              <Link to="/week">Love Week</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/give">Give</Link>
            </li>
            <li>
              <Link to="/rsvp">RSVP</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderWrapper>
    <SkipNavContent />
  </>
)

export default Header
