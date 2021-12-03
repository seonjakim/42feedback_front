import React from 'react'
import { HOST_URL } from '../../constants'
import Header from '../../components/Header'
import CadetCard from '../../components/cadetCard/CadetCard'

const TeamMember = () => {
  const [teamMember, setTeamMember] = React.useState([])
  React.useEffect(() => {
    fetch(`${HOST_URL}/api/v1/project/1/user/1/feedback-list`)
      .then((res) => res.json())
      .then((data) => setTeamMember(data))
  }, [])
  return (
    <div>
      <Header title="팀원 리스트" />
      <div style={{ marginTop: '2em' }}>
        {teamMember.map((member, index) => (
          <div style={{ margin: '4px 8px' }} key={index}>
            <CadetCard member={member} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMember
