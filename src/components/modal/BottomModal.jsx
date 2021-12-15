import React from 'react'
import styled from 'styled-components'

const BottomModal = ({ isOpen, editClick, deleteClick, backgroundClick }) => {
  if (!isOpen) return null
  const modalClose = (e) => {
    if (e.target.nodeName === 'BUTTON') return
    backgroundClick(false)
  }

  return (
    <StyledModalContainer onClick={modalClose}>
      <div>
        <button onClick={editClick}>Edit</button>
        <button onClick={deleteClick}>Delete</button>
      </div>
    </StyledModalContainer>
  )
}

export default BottomModal

const StyledModalContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  div {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  button {
    width: 100%;
    padding: 1.5em;
  }
`
