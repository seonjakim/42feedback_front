import withProjectHOC from '../../components/project/withProjectHOC'
import ProjectView from '../../components/project/ProjectView'
import { HOST_URL } from '../../constants'

const ProjectCreate = withProjectHOC(ProjectView)

const Create = ({ cadets }) => {
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
      leftBtnName="뒤로가기"
      rightBtnName="프로젝트 생성하기"
      cadets={cadets}
      onProjectSubmit={onProjectSubmit}
      onNoProjectSubmit={onNoProjectSubmit}
    />
  )
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
