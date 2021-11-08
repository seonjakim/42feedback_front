import styled from 'styled-components'

export const StyledList = styled.li`
  /* margin: 8px; */
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.green.midLight};
  color: ${({ theme }) => theme.green.midLight};
  padding: 0.5em 1em;
`
