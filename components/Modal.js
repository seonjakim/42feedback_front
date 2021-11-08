import React from 'react'
import styled from 'styled-components'
const Modal = ({ onClick, children }) => {
  return (
    <ModalContainer>
      <InnerContainer>{children}</InnerContainer>
      <ModalBackground onClick={onClick} />
    </ModalContainer>
  )
}

export default Modal

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBackground = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`

const InnerContainer = styled.div`
  background-color: #fff;
  width: 500px;
  border-radius: 8px;
  padding: 3rem;
  z-index: 1;
`
