import React from 'react'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default Layout

const StyledLayout = styled.div`
  position: relative;
  width: 690px;
  height: 100vh;
  max-height: 100%;
  margin: auto;
  background-color: ${({ theme }) => theme.color.light};
  @media only screen and (max-width: 870px) {
    width: 100vw;
  }
  @media only screen and (max-width: 670px) {
    font-size: 90%;
  }
`
