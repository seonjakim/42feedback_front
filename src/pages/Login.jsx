import React from 'react'
import styled from 'styled-components'
import { StyledFullButton } from '../components/buttons/StyledButton'

const Login = () => {
  return (
    <StyledContainer>
      <div className="center">
        <h1>42 Feedback</h1>
        <h3>프로젝트 후, 건설적인 피드백이 필요하신 모든 카뎃</h3>
      </div>
      <a href="https://52.78.177.198:8080/oauth2/authorization/seoul42 ">
        <StyledFullButton emphasis="high">42에서 로그인하기</StyledFullButton>
      </a>
    </StyledContainer>
  )
}

export default Login

const StyledContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr auto;

  & .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4em;

    h1 {
      padding: 1em;
    }
    h3 {
      color: ${({ theme }) => theme.font.grey};
    }
  }
`
