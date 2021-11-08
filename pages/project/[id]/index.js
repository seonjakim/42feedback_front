import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import FeedbackContext from '../../../contexts/FeedbackContext'
import { StyledHeader } from '../../../components/styles/Header.styled'
import { StyledList } from '../../../components/styles/List.styled'
import { StyledButton } from '../../../components/styles/Button.styled'

const feedback = () => {
  const { projects } = useContext(FeedbackContext)
  const [project, setProject] = React.useState({
    id: '',
    project_name: '',
    project_member: [],
  })
  const [feedbackContent, setFeedbackContent] = React.useState({
    from_user: '',
    to_user: '',
    star: '',
    feedback: '',
  })
  const [feedbackWindow, setFeedbackWindow] = React.useState(undefined)
  const router = useRouter()
  let id = router.query.id
  useEffect(() => {
    console.log(projects)
    // if (id !== undefined) window.sessionStorage.setItem('project_id', id)
    // id = window.sessionStorage.getItem('project_id')
    // const projects = window.sessionStorage.getItem('projects')
    // setProject(JSON.parse(projects)[id - 1])
  }, [])

  const feedbackWindowOnClick = (index) => {
    if (feedbackWindow === index) {
      setFeedbackWindow(undefined)
      return
    }
    setFeedbackWindow(index)
  }
  // 피드백 준 사람 정보 update하는 법
  // 별점과 피드백을 받는 함수를 여러번 사용할 수 있도록 하는 법
  return (
    <>
      <StyledHeader>피드백 나누기</StyledHeader>
      <ul>
        {project?.project_member.map((member, idx) => (
          <FeedbackContainer key={idx}>
            <StyledList onClick={() => feedbackWindowOnClick(idx)}>
              {member.login}
            </StyledList>
            <FeedbackWindow open={feedbackWindow === idx}>
              <label htmlFor="star">별점 : </label>
              <input type="text" />
              <div>피드백 : </div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <StyledButton>제출</StyledButton>
            </FeedbackWindow>
          </FeedbackContainer>
        ))}
      </ul>
    </>
  )
}

export default feedback

const FeedbackContainer = styled.div`
  padding: 8px;
`

const FeedbackWindow = styled.div`
  display: ${({ open }) => !open && 'none'};
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  margin-top: 8px;
`
