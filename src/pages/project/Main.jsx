import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ListCard from '../../components/ListCard'
import { StyledButton } from '../../components/buttons/StyledButton'
import Header from '../../components/Header'
import BottomModal from '../../components/modal/BottomModal'
import { fetchData } from '../../library/index'

const projectDetails = {
  projectId: 1,
  projectTitle: '알고리즘',
  teamMember: [
    {
      id: 1,
      login: 'seokim',
      img:
        'https://images.velog.io/images/seonja/post/e7b53d91-67a5-4b46-a77c-0f574aa33017/medium_seokim.jpg',
      feedback: true,
    },
    {
      id: 1,
      login: 'mkim3',
      img:
        'https://images.velog.io/images/seonja/post/d0f03308-2989-4ab2-9547-a281c6bf29e4/medium_mkim3.jpg',
      feedback: true,
    },
  ],
}

const Main = () => {
  const [projects, setProjects] = React.useState([])
  const [isOpen, setIsOpen] = React.useState(false)
  React.useEffect(() => {
    fetchData('/projects', setProjects)
  }, [])

  const deleteBtnClick = (e) => {
    e.stopPropagation()
    setIsOpen(true)
  }

  return (
    <StyledProjectContainer>
      <Header title="프로젝트" />
      <StyledButtonArea>
        <Link to="/project/create">
          <StyledButton>새 프로젝트만들기</StyledButton>
        </Link>
      </StyledButtonArea>
      {projects.map((project, index) => (
        <div key={index} style={{ margin: '4px 8px' }}>
          <ListCard
            url={`/project/${project.projectId}`}
            leftBtnClick={deleteBtnClick}
            project={project}
          />
        </div>
      ))}
      <BottomModal backgroundClick={() => setIsOpen(false)} isOpen={isOpen} />
    </StyledProjectContainer>
  )
}

export default Main

const StyledProjectContainer = styled.div`
  display: grid;
  grid-template-rows: 10vh 4rem 1fr;
`
const StyledButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 2em;
`
