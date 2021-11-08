import styled from 'styled-components'

export const StyledHeader = styled.h2`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.green.mid};
  color: #fff;
`
