import React from 'react'
import { useParams } from 'react-router-dom'
import { HOST_URL } from '../../constants'
import Header from '../../components/Header'
import CadetCard from '../../components/cadetCard/CadetCard'

const TeamMember = () => {
  const [teamMember, setTeamMember] = React.useState([])
  const { id } = useParams()
  React.useEffect(() => {
    fetch(`${HOST_URL}/project/${id}/user/2/feedback-list`)
      .then((res) => res.json())
      .then((data) => setTeamMember(data))
  }, [])
  console.log(teamMember)
  return (
    <div>
      <Header title="팀원 리스트" />
      <div style={{ marginTop: '2em' }}>
        {teamMember.map((member, index) => (
          <div style={{ margin: '4px 8px' }} key={index}>
            <CadetCard
              member={member}
              url={`/cadet/${id}/${member.userId}/feedback/${member.login}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMember
