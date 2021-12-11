import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import CancelDoneButton from '../../components/buttons/CancelDoneButton'
import MessageModal from '../../components/modal/MessageModal'
import { StyledStar } from './components/StyledInputRange'
import { HOST_URL } from '../../constants'
const Feedback = () => {
  const { id, projectId, login } = useParams()
  const submitFeedback = async () => {
    const res = await fetch(`${HOST_URL}/api/v1/${projectId}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: {
        evalUserId: 7,
        appraisedUserId: id,
        message: 'test',
        star: 3,
      },
    })
    console.log(res)
    if (res.ok) {
    }
  }
  return (
    <FeedContainer>
      <Header title="피드백 남기기" />
      <h1>{login}</h1>
      <StyledStar type="range" max="5" defaultValue="3" />
      <textarea style={{ width: '100%', height: '50vh' }}></textarea>
      <div style={{ position: 'absolute', bottom: '0', width: '100%' }}>
        <CancelDoneButton doneClick={submitFeedback} />
      </div>
      <MessageModal
        isOpen={false}
        message="지금까지 작성한 내용을 삭제하시겠습니까?"
      />
    </FeedContainer>
  )
}

export default Feedback

const FeedContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  height: 100%;
`
