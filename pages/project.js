import React, { useContext, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { StyledHeader } from '../components/styles/Header.styled'
import { StyledList } from '../components/styles/List.styled'
import FeedbackContext from '../contexts/FeedbackContext'

const Project = ({ projectList }) => {
  const initialContent = {
    range: '4',
    feedback: '',
  }
  const { projects, setProjects } = useContext(FeedbackContext)
  const [selectedProject, setSelectedProject] = useState(undefined)
  const [feedbackContent, setFeedbackContent] = useState(initialContent)
  const [targetMember, setTargetMember] = useState(undefined)

  const projectSelect = (index) => {
    setTargetMember(undefined)
    setSelectedProject(index)
  }

  const changeTargetMember = (member) => {
    if (targetMember === member) {
      setTargetMember(undefined)
      return
    }
    setTargetMember(member)
  }
  const changeFeedbackContent = (e) => {
    console.log(feedbackContent)
    setFeedbackContent({
      ...feedbackContent,
      [e.target.name]: e.target.value,
    })
  }
  React.useEffect(() => {
    window.sessionStorage.setItem('projects', JSON.stringify(projectList))
    setProjects(projectList)
  }, [])
  return (
    <>
      <StyledHeader>My 42 Project</StyledHeader>
      <div>
        <ul>
          {projectList.map((project, index) => (
            <div key={index} style={{ margin: '8px' }}>
              <StyledList onClick={() => projectSelect(index)}>
                {project.project_name}
              </StyledList>
              <MemberContainer visible={selectedProject === index}>
                {project.project_member.map((member, index) => (
                  <span key={index}>
                    <MemberButton
                      onClick={() => changeTargetMember(member.login)}
                    >
                      {member.login}
                    </MemberButton>
                  </span>
                ))}
                {targetMember !== undefined && (
                  <>
                    <div>
                      <h3>{targetMember}</h3>
                      <span>{feedbackContent.range}점</span>
                      <input
                        name="range"
                        type="range"
                        min="0"
                        max="5"
                        value={feedbackContent.range}
                        onChange={changeFeedbackContent}
                      />
                    </div>
                    <textarea
                      placeholder="건전한 피드백을 주고 받아요~"
                      name="feedback"
                      id=""
                      cols="30"
                      rows="10"
                      onChange={changeFeedbackContent}
                    ></textarea>
                    <button>제출하기</button>
                  </>
                )}
              </MemberContainer>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/projects`)
  const projectList = await res.json()
  return {
    props: {
      projectList,
    },
  }
}

export default Project

const MemberContainer = styled.div`
  display: ${({ visible }) => !visible && 'none'};
  background-color: #fff;
  padding: 8px;
  min-height: 100px;
`
const MemberButton = styled.button`
  background-color: ${({ theme }) => theme.green.light};
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  margin: 0 0.2em 0.2em 0;
`
