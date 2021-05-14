import styled from '@emotion/styled'
import breakpoints from '../style/breakpoints'

const Container = styled.div`
  margin: 0 1.5rem;
  ${breakpoints.large} {
    width: 1100px;
    margin: 0 auto;
  }
`

const TextContainer = styled.div`
  ${breakpoints.large} {
    width: 800px;
  }
`

export default Container

export { TextContainer }
