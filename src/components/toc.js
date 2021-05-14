import React from 'react'
import styled from '@emotion/styled'
import colors from '../style/colors'

const TOCWrapper = styled.div`
  background: ${colors.green};
  padding: 1rem;
  margin-bottom: 2rem;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      margin-right: 1.5rem;
      &:last-child {
        margin-right: none;
      }
    }
  }
  a {
    color: black;
  }
`

const TOC = ({ links }) => (
  <TOCWrapper>
    <ul>
      {links.map((link) => (
        <li>{link}</li>
      ))}
    </ul>
  </TOCWrapper>
)

export default TOC
