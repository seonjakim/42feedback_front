import React from 'react'
import styled from 'styled-components'
import StarRange from './components/StarRange'
import CancelDoneButton from '../../components/buttons/CancelDoneButton'
import MessageModal from '../../components/modal/MessageModal'

const Feedback = () => {
  return (
    <FeedContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}></div>
      <h2>Seokim</h2>

      <StarRange type="range" max="5" defaultValue="3" />
      <h3>content</h3>
      <textarea style={{ width: '100%', height: '50vh' }}></textarea>
      <div>
        <CancelDoneButton />
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
  grid-template-rows: repeat(auto);
  height: 100%;
  width: 100%;
  bottom: 0;
  border-radius: 8px 8px 0 0;
`
