import React from 'react'
import withProjectHOC from './components/withProjectHOC'
import ProjectView from './components/ProjectView'
import { cadetIds } from './cadets'
import { fetchData, fetchPost } from '../../library/index'

const ProjectCreate = withProjectHOC(ProjectView)

const Create = () => {
  const cadets = cadetIds
  const onProjectSubmit = (details) => {
    return fetchPost(`/project`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(details),
    })
  }
  const onNoProjectSubmit = () => {
    return { ok: true }
  }
  return (
    <ProjectCreate
      pageTitle="새 프로젝트 생성"
      cadets={cadets}
      onProjectSubmit={onProjectSubmit}
      onNoProjectSubmit={onNoProjectSubmit}
    />
  )
}

export default Create
