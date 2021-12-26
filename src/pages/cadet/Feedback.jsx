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
  const { cadetId, id, projectId, login } = useParams()
  const [feedbackDetails, setFeedbackDetails] = React.useState({
    evalUserId: cadetId,
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

  const goToPrevPage = () => {
    // if there is no content, just return to prev page
    if (feedbackDetails.message.length) {
      setIsOpen(true)
      return
    }
    history(`/cadet/${projectId}`)
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
      <CancelDoneButton cancelClick={goToPrevPage} doneClick={submitFeedback} />
      <MessageModal
        isOpen={false}
        message="If you leave, your edits won't be saved."
        onYesClick={() => history(`/cadet/${projectId}`)}
        onNoClick={() => setIsOpen(false)}
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
