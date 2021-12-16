import React from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import CancelDoneButton from '../../components/buttons/CancelDoneButton'
import MessageModal from '../../components/modal/MessageModal'
import { StyledStar } from './components/StyledInputRange'
import { isEmpty, fetchPost } from '../../library/index'
const Feedback = () => {
  const history = useNavigate()
  const { id, projectId, login } = useParams()
  const [feedbackDetails, setFeedbackDetails] = React.useState({
    evalUserId: 2,
    appraisedUserId: id,
    message: '',
    star: 3,
  })
  const submitFeedback = async () => {
    if (isEmpty(feedbackDetails)) return
    const res = await fetchPost(`/project/${projectId}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(feedbackDetails),
    })
    if (res.ok) {
      history(`/cadet/${projectId}`)
    }
  }

  const feedbackDetailsChange = (e) => {
    const { name, value } = e.target
    setFeedbackDetails((state) => {
      return { ...state, [name]: value }
    })
  }
  return (
    <StyledFeedContainer>
      <Header title="피드백 남기기" />
      <h1>{login}</h1>
      <StyledStar
        onChange={feedbackDetailsChange}
        name="star"
        type="range"
        max="5"
        defaultValue="3"
      />
      <textarea
        onChange={feedbackDetailsChange}
        style={{ width: '100%', height: '50vh' }}
        name="message"
      ></textarea>
      <CancelDoneButton doneClick={submitFeedback} />
      <MessageModal
        isOpen={false}
        message="지금까지 작성한 내용을 삭제하시겠습니까?"
      />
    </StyledFeedContainer>
  )
}

export default Feedback

const StyledFeedContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto 3em;
  height: 100%;
`
