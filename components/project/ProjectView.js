import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { StyledInput } from '../styles/Input.styled'
import { StyledButton } from '../styles/Button.styled'
import SearchBar from '../SearchBar'

const ProjectView = ({ ...props }) => {
  const {
    isEdit,
    cadets,
    projectDetails,
    searchInput,
    setSearchInput,
    updateCadetList,
    cadetListUpdate,
    setProjectName,
    submitProject,
    deleteProject,
  } = props
  const { name, userList } = projectDetails
  return (
    <div
      style={{
        display: 'relative',
      }}
    >
      <HeaderContainer>
        <Link href="/project">
          <BackwardArrow>&lsaquo;</BackwardArrow>
        </Link>
        {isEdit ? '프로젝트 편집하기' : '새 프로젝트 생성'}
      </HeaderContainer>
      <StyledInput
        data-id="name"
        value={name}
        onChange={setProjectName}
        placeholder="프로젝트 이름을 정해주세요."
      ></StyledInput>
      <div style={{ margin: '1em' }}>
        <SearchBar
          inputOnChange={setSearchInput}
          input={searchInput}
          cadets={cadets}
          cadetSelect={updateCadetList}
        />
      </div>
      <CadetListUl>
        {userList.map((cadet, index) => (
          <CadetList onClick={() => cadetListUpdate(cadet.login)} key={index}>
            {cadet.login}
          </CadetList>
        ))}
      </CadetListUl>
      <div>
        <LeftBtn onClick={deleteProject}>
          {isEdit ? '프로젝트 삭제하기' : '뒤로가기'}
        </LeftBtn>
        <RightBtn onClick={submitProject}>
          {isEdit ? '프로젝트 편집하기' : '프로젝트 생성하기'}
        </RightBtn>
      </div>
    </div>
  )
}

export default ProjectView

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  font-size: 1.5em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  color: #fff;
  background-position: 0 15%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://images.velog.io/images/seonja/post/43344fc1-c3d2-4479-af6e-d7a23f72f631/pexels-pixabay-270408.jpg');
`

const CadetList = styled.li`
  border: 1px solid ${({ theme }) => theme.border.grey};
  border-width: 1px 0;
  padding: 1em;
  background-color: #fff;
  margin: 4px 0;
`
const CadetListUl = styled.ul`
  height: 60vh;
  overflow: auto;
`
const BackwardArrow = styled.div`
  padding: 1.5rem;
  color: ${({ theme }) => theme.font.grey};
`
const LeftBtn = styled.button`
  background-color: grey;
  padding: 1em;
  width: 40%;
`
const RightBtn = styled.button`
  background-color: ${({ theme }) => theme.color.main};
  padding: 1em;
  width: 60%;
`
