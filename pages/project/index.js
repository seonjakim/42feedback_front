import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { StyledHeader } from '../../components/styles/Header.styled'

export default function Project({ projects }) {
  return (
    <div>
      <Head>
        <title>42FEEDBACK</title>
        <meta name="description" content="feedback for a successful project" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <StyledHeader>현재 진행 중인 프로젝트</StyledHeader>
      <div
        style={{
          margin: '1.5em 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>로그인 이름</span>
        <Link href="/project/create">
          <ProjectCreationBtn>new 프로젝트</ProjectCreationBtn>
        </Link>
      </div>
      <div>
        {projects.map((project, idx) => (
          <Link key={idx} href={`/project/${project.projectId}`}>
            <ProjectChip>
              <div>
                <h4>{project.name}</h4>
                <span style={{ fontSize: '0.7em', color: 'grey' }}>
                  {project.description}
                </span>
              </div>
              <span
                style={{
                  color: 'grey',
                  float: 'right',
                  fontSize: '1.3em',
                }}
              >
                &rsaquo;
              </span>
            </ProjectChip>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`http://52.78.177.198:8080/api/v1/projects`)
  const projects = await res.json()
  return {
    props: {
      projects,
    },
  }
}

const ProjectChip = styled.div`
  padding: 1em;
  margin: 0.2em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* height: 3em; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`
const ProjectCreationBtn = styled.button`
  padding: 0.5em 0.7em;
  color: ${({ theme }) => theme.font.grey};
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 60px;
`
