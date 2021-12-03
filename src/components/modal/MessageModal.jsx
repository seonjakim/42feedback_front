import React from 'react'
import styled from 'styled-components'

const MessageModal = ({ isOpen, message }) => {
  return (
    <StyledModalContainer isOpen={isOpen}>
      <div>
        <span>{message}</span>
        <StyledModalButton>Yes</StyledModalButton>
        <StyledModalButton low="true">No</StyledModalButton>
      </div>
    </StyledModalContainer>
  )
}

export default MessageModal

const StyledModalContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 110%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  div {
    position: absolute;
    width: 80%;
    background-color: #fff;
    padding: 2em;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    display: inline-block;
    word-wrap: break-word;
    hyphens: auto;
    overflow-wrap: break-word;
    margin-bottom: 2rem;
  }
  button {
    margin: 8px 0 0 0;
  }
`

const StyledModalButton = styled.button`
  background-color: ${({ low, theme }) => (low ? '#fff' : theme.color.main)};
  color: ${({ low }) => (low ? 'inherit' : '#fff')};
  border: ${({ low, theme }) =>
    low ? '1px solid #ccc' : `1px solid ${theme.color.main}`};
  border-radius: 4px;
  font-weight: 700;
  width: 100%;
  padding: 1rem;
`
