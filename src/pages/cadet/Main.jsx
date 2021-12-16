import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import ListCard from '../../components/ListCard'
import { fetchData } from '../../library/index'

const Main = () => {
  const [projects, setProjects] = React.useState([])
  React.useEffect(() => {
    fetchData('/project/user/2', setProjects)
  }, [])
  console.log(projects)
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
            <ListCard url={`/cadet/${project.projectId}`} project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main

const StyledProjectListContainer = styled.div``
