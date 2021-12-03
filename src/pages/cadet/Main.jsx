import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { HOST_URL } from '../../constants'
import ListCard from '../../components/ListCard'

const Main = () => {
  const [projects, setProjects] = React.useState([])
  React.useEffect(() => {
    fetch(`${HOST_URL}/api/v1/project/user/1`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])
  return (
    <div>
      <Header title="내 프로젝트 리스트" />
      <div
        style={{
          overflow: 'auto',
          margin: '2em 0',
          height: '85vh',
        }}
      >
        {projects.map((project, index) => (
          <div style={{ padding: '4px 8px' }} key={index}>
            <Link to={`/cadet/${project.projectId}`}>
              <ListCard project={project} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main

const StyledProjectListContainer = styled.div``
