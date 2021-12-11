import React from 'react'
import { useParams } from 'react-router-dom'
import withProjectHOC from './components/withProjectHOC'
import ProjectView from './components/ProjectView'
import { HOST_URL } from '../../constants'
import { cadetIds } from './cadets'
const ProjectEdit = withProjectHOC(ProjectView)

const Edit = () => {
  const cadets = cadetIds
  const { id } = useParams()
  const [project, setProject] = React.useState()
  React.useEffect(() => {
    fetch(`${HOST_URL}/api/v1/project/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
  }, [])
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
      project={project}
      cadets={cadets}
      onProjectSubmit={onProjectSubmit}
      onNoProjectSubmit={onNoProjectSubmit}
    />
  )
}

export default Edit

// export const getServerSideProps = async ({ params }) => {
//   const [cadetRes, projectRes] = await Promise.all([
//     fetch(`http://localhost:3000/api/cadets`),
//     fetch(`http://52.78.177.198:8080/api/v1/project/${params.id}`),
//   ])
//   const [cadets, project] = await Promise.all([
//     cadetRes.json(),
//     projectRes.json(),
//   ])

//   return {
//     props: { cadets, project },
//   }
// }
