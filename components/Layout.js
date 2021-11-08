import styled from 'styled-components'

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default Layout

const StyledLayout = styled.div`
  width: 60vw;
  height: 100vh;
  max-height: 100%;
  margin: auto;
  background-color: #eee;
  position: relative;

  @media only screen and (max-width: 870px) {
    width: 100vw;
  }
`
