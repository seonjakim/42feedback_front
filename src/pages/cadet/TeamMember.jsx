import React from 'react'
import { useParams } from 'react-router-dom'
import { HOST_URL } from '../../constants'
import Header from '../../components/Header'
import CadetCard from '../../components/cadetCard/CadetCard'
import { fetchData } from '../../library/index'

const TeamMember = () => {
  const [teamMember, setTeamMember] = React.useState({
    userId: null,
    appraisedUserFeedbackList: [],
  })
  const { id } = useParams()
  React.useEffect(() => {
    fetchData(`/project/${id}/user/feedback-list`, setTeamMember)
  }, [])
  console.log(teamMember)
  const { userId, appraisedUserFeedbackList } = teamMember
  return (
    <div>
      <Header title="팀원 리스트" />
      <div style={{ marginTop: '2em' }}>
        {appraisedUserFeedbackList.map((member, index) => (
          <div style={{ margin: '4px 8px' }} key={index}>
            <CadetCard
              member={member}
              url={`/cadet/${userId}/${id}/${member.appraisedUserId}/feedback/${member.login}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMember
