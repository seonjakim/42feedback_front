import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.main};
  padding: 0.5em 1em;
  color: ${({ theme }) => theme.font.grey};
  border-radius: 4px;
`
