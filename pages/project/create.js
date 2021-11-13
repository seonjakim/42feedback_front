import withProjectHOC from '../../components/project/withProjectHOC'
import ProjectView from '../../components/project/ProjectView'

const ProjectCreate = withProjectHOC(ProjectView)

const Create = ({ cadets }) => {
  return <ProjectCreate cadets={cadets} />
}

export default Create

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/cadets`)
  const cadets = await res.json()
  return {
    props: {
      cadets,
    },
  }
}
