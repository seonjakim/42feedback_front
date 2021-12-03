import React from 'react'
import styled from 'styled-components'

const ListCard = ({ project, leftBtnClick }) => {
  const { name, description } = project
  return (
    <StyledListCardContainer>
      <h2>{name}</h2>
      <h4>{description}</h4>
      {/* <div>{userList.length} people</div> */}
      {leftBtnClick && <button onClick={leftBtnClick}>&#8942;</button>}
    </StyledListCardContainer>
  )
}

export default ListCard

const StyledListCardContainer = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  padding: 1em;
  background-color: #fff;
  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1rem 1.5rem;
    background-color: transparent;
    font-size: 150%;
    color: ${({ theme }) => theme.font.grey};
  }
  h4 {
    color: ${({ theme }) => theme.font.grey};
    margin-top: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 80%;
  }
`
