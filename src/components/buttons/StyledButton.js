import styled from 'styled-components'

export const StyledButton = styled.button`
  border-radius: 4px;
  padding: 0.5em;
  color: #fff;
  background-color: ${({ theme }) => theme.color.main};
  width: fit-content;
`
export const StyledFullButton = styled.button`
  width: 100%;
  padding: 1em;
  color: ${({ emphasis }) => (emphasis === 'high' ? '#fff' : '#888')};
  background-color: ${({ emphasis, theme }) =>
    emphasis === 'high' ? theme.color.main : ''};
`
