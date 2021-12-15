import React from 'react'
import withProjectHOC from './components/withProjectHOC'
import ProjectView from './components/ProjectView'
import { HOST_URL } from '../../constants'
import { cadetIds } from './cadets'
const ProjectEdit = withProjectHOC(ProjectView)

const Edit = () => {
  const cadets = cadetIds
  const onProjectSubmit = async (details, projectId) => {
    return await fetch(`${HOST_URL}/project/${projectId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    })
  }
  const onNoProjectSubmit = async (projectId) => {
    return await fetch(`${HOST_URL}/project/${projectId}`, {
      method: 'DELETE',
    })
  }
  return (
    <ProjectEdit
      pageTitle="프로젝트 편집하기"
      cadets={cadets}
      onProjectSubmit={onProjectSubmit}
      onNoProjectSubmit={onNoProjectSubmit}
    />
  )
}

export default Edit
