import React from 'react'
import styled from 'styled-components'

const CancelDoneButton = ({}) => {
  return (
    <StyledCancelDoneButton>
      <button>Cancel</button>
      <button>Done</button>
    </StyledCancelDoneButton>
  )
}

export default CancelDoneButton

const StyledCancelDoneButton = styled.div`
  width: 100%;
  button {
    color: #fff;
    padding: 1em;
    &:first-child {
      width: 40%;
      background-color: #888;
    }
    &:last-child {
      width: 60%;
      background-color: ${({ theme }) => theme.color.main};
    }
  }
`
