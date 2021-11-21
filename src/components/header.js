import React, { useState } from 'react'
import styled from '@emotion/styled'
// import { jsx, css, keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import Container from './container'
import colors from '../style/colors'
import breakpoints from '../style/breakpoints'
import bird from '../images/header-bird.gif'
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
    li {
      ${breakpoints.small} {
        display: inline-block;
        margin-right: 1.5rem;
      }
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
  display: block;
  font-family: Spectral, Georgia, serif;
  text-decoration: none;
  font-size: 0.9rem;
  z-index: 2;
  position: relative;
  ${breakpoints.small} {
    font-size: 1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`

const MobileButton = styled.button`
  color: ${colors.rose};
  background: black;
  border: 0;
  display: inline-block;
  cursor: pointer;
  ${breakpoints.small} {
    display: none;
  }
`

const Nav = styled.nav`
  display: none;
  z-index: 2;
  position: relative;
  ${breakpoints.small} {
    display: block;
  }
  ${(props) => props.expanded && `display: block;`}
`
/*
const fly = keyframes`
  0% {
    transform: translate3d(-100px,0,0);
  }

  50% {
    transform: translate3d(${
      typeof window !== 'undefined' ? window.innerWidth / 2 : '500'
    }px,40px,0);
  }

  100% {
    transform: translate3d(${
      typeof window !== 'undefined' ? window.innerWidth + 90 : '5000'
    }px,0,0);
  }
`

const Bird = styled.img`
  position: absolute;
  animation: ${fly} 15s ease infinite;
  width: 50px;
`*/

const Bird = styled.img`
  position: absolute;
  top: 1rem;
  left: 0;
  display: none;
  opacity: 0.3;
  z-index: 1;
  ${breakpoints.large} {
    display: block;
  }
`

const Header = ({ hideKemily = false, hasHero = false }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <SkipNavLink />
      <HeaderWrapper hasHero={hasHero}>
        <Bird src={bird} />
        <Container>
          {!hideKemily && (
            <Kemily to="/">Kevin Miller &amp; Emily Gottlieb</Kemily>
          )}
          <MobileButton
            onClick={(event) => {
              setExpanded(!expanded)
            }}
          >
            {expanded ? <>Hide menu</> : <>Menu</>}
          </MobileButton>
          <Nav expanded={expanded}>
            <ul>
              <li>
                <Link to="/party">Love Party</Link>
              </li>
              <li>
                <Link to="/week">Love Week</Link>
              </li>
              <li>
                <Link to="/photos">Love Week Photos</Link>
              </li>
              <li>
                <Link to="/photos/past">Past Photos</Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </HeaderWrapper>
      <SkipNavContent />
    </>
  )
}

export default Header
