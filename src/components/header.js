import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import Container from './container'
import colors from '../style/colors'
import '@reach/skip-nav/styles.css'

const HeaderWrapper = styled.header`
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1.5px solid black;
  background: ${colors.rose};
  ${(props) => props.hasHero && `margin-bottom: 0;`}
  ul {
    list-style-type: none;
    margin: 0.5rem 0 0 0;
    padding: 0;
    display: flex;
    li {
      display: inline-block;
      margin-right: 1.5rem;
      &:last-child {
        margin-right: 0;
      }
      margin-bottom: 0;
    }
  }
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Kemily = styled(Link)`
  color: black;
  font-family: Spectral, Georgia, serif;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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
