import React from 'react'
import styled from 'styled-components'

const Header = ({ prevOnClick, title }) => {
  return (
    <StyledHeader>
      {prevOnClick && <div onClick={prevOnClick}></div>}
      <h1>{title}</h1>
    </StyledHeader>
  )
}

export default Header

export const StyledHeader = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  height: 10vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 2em;
  div {
    margin: 0 2em 0 0;
    width: 24px;
    height: 24px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/U%2B1F860_WIDE-HEADED_LEFTWARDS_LIGHT_BARB_ARROW.svg/1262px-U%2B1F860_WIDE-HEADED_LEFTWARDS_LIGHT_BARB_ARROW.svg.png');
  }
`
