import withProjectHOC from '../../../components/project/withProjectHOC'
import ProjectView from '../../../components/project/ProjectView'
import { HOST_URL } from '../../../constants'
const ProjectEdit = withProjectHOC(ProjectView)

const Index = ({ project, cadets }) => {
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
      leftBtnName="프로젝트 삭제하기"
      rightBtnName="프로젝트 편집하기"
      project={project}
      cadets={cadets}
      onProjectSubmit={onProjectSubmit}
      onNoProjectSubmit={onNoProjectSubmit}
    />
  )
}

export default Index

export const getServerSideProps = async ({ params }) => {
  const [cadetRes, projectRes] = await Promise.all([
    fetch(`http://localhost:3000/api/cadets`),
    fetch(`http://52.78.177.198:8080/api/v1/project/${params.id}`),
  ])
  const [cadets, project] = await Promise.all([
    cadetRes.json(),
    projectRes.json(),
  ])

  return {
    props: { cadets, project },
  }
}
