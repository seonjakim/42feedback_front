import styled from 'styled-components'
import React from 'react'

const Chip = ({ children, onClick }) => {
  return <StyledChip onClick={onClick}>{children}</StyledChip>
}

export default Chip

const StyledChip = styled.div`
  background-color: ${({ theme }) => theme.green.midLight};
  width: 150px;
  padding: 1em;
  border-radius: 4px;
  color: #fff;
`
