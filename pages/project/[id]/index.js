import withProjectHOC from '../../../components/project/withProjectHOC'
import ProjectView from '../../../components/project/ProjectView'
const ProjectEdit = withProjectHOC(ProjectView)

const Index = ({ project, cadets }) => {
  return <ProjectEdit isEdit={true} project={project} cadets={cadets} />
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
