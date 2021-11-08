import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { StyledButton } from '../components/styles/Button.styled'
import { StyledHeader } from '../components/styles/Header.styled'
import SearchBar from '../components/SearchBar'
import Chip from '../components/Chip'
import Modal from '../components/Modal'

export default function Home({ cadets }) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [input, setInput] = React.useState('')
  const [projectList, setProjectList] = React.useState([])
  const [projectName, setProjectName] = React.useState('')
  const [selectedCadet, setSelectedCadet] = React.useState([])
  const [editedProject, setEditedProject] = React.useState(undefined)
  React.useEffect(() => {
    const initialProjectList = window.sessionStorage.getItem('mentor_projects')
    if (initialProjectList !== null)
      setProjectList(JSON.parse(initialProjectList))
  }, [])

  const resetInput = () => {
    setModalOpen(false)
    setProjectName('')
    setSelectedCadet([])
  }
  const cadetRemove = (id) =>
    setSelectedCadet(selectedCadet.filter((cadet) => cadet !== id))

  const cadetSelect = (id) => {
    if (selectedCadet.filter((cadet) => cadet === id).length) {
      setInput('')
      return
    }
    setSelectedCadet((state) => [...state, id])
    setInput('')
  }

  const setSessionItem = (id) => {
    if (!projectName.length || !selectedCadet.length) {
      alert('project 내용을 작성해주세요.')
      return
    }
    // if get all the project data from the Back, the login below does not need
    // just need to reset the projectName and selectedCadet as empty

    setProjectList([
      ...projectList,
      { name: projectName, cadets: selectedCadet },
    ])

    window.sessionStorage.setItem(
      'mentor_projects',
      JSON.stringify(projectList)
    )
    resetInput()
  }

  const editProject = () => {
    projectList[editedProject] = {
      name: projectName,
      cadets: selectedCadet,
    }
    setProjectList(projectList)
    resetInput()
    setEditedProject(undefined)
  }

  const projectEdit = (id) => {
    setProjectName(projectList[id].name)
    setSelectedCadet(projectList[id].cadets)
    setModalOpen(true)
    setEditedProject(id)
  }

  const newProject = () => {
    resetInput()
    setEditedProject(undefined)
    setModalOpen(true)
  }

  return (
    <div>
      <Head>
        <title>42FEEDBACK</title>
        <meta name="description" content="feedback for a successful project" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {modalOpen && (
        <Modal onClick={() => setModalOpen(false)}>
          <label htmlFor="project-name">프로젝트 이름 : </label>
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            type="text"
          />
          <SearchBar
            cadetSelect={cadetSelect}
            cadets={cadets}
            input={input}
            inputOnChange={setInput}
          />
          <div style={{ minHeight: '200px' }}>
            {selectedCadet.map((cadet) => (
              <Chip onClick={() => cadetRemove(cadet)} key={cadet}>
                {cadet}
              </Chip>
            ))}
          </div>
          <StyledButton
            onClick={editedProject !== undefined ? editProject : setSessionItem}
          >
            {editedProject !== undefined
              ? `프로젝트 변경하기`
              : `프로젝트 생성하기`}
          </StyledButton>
        </Modal>
      )}

      <StyledHeader>현재 진행 중인 프로젝트</StyledHeader>
      <div
        style={{
          height: '200px',
          backgroundColor: '#fff',
          margin: '8px',
        }}
      >
        {projectList.map((project, idx) => (
          // add onClick event to open Modal for edit
          <ProjectChip onClick={() => projectEdit(idx)} key={idx}>
            {project.name}
          </ProjectChip>
        ))}
      </div>
      <StyledButton onClick={newProject}>new 프로젝트</StyledButton>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/cadets`)
  const cadets = await res.json()
  return {
    props: {
      cadets,
    },
  }
}

const ProjectChip = styled.div`
  border: 1px solid blue;
  color: blue;
  padding: 0.5em;
  text-align: center;
  border-radius: 4px;
  margin: 8px;
`
