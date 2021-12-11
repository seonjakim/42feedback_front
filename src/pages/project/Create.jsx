import React from 'react'
import withProjectHOC from './components/withProjectHOC'
import ProjectView from './components/ProjectView'
import { HOST_URL } from '../../constants'
import { cadetIds } from './cadets'

const ProjectCreate = withProjectHOC(ProjectView)

const Create = () => {
  const cadets = cadetIds
  const onProjectSubmit = async (details) => {
    return await fetch(`${HOST_URL}/project`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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

// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:3000/api/cadets`)
//   const cadets = await res.json()
//   return {
//     props: {
//       cadets,
//     },
//   }
// }
