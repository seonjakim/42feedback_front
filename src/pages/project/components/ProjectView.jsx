import styled from 'styled-components'
import Link from 'next/link'
import SearchBar from '../SearchBar'
import CancelCompleteBtn from '../lib/CancelCompleteBtn'
import CadetInfoCard from '../lib/CadetInfoCard'

const ProjectView = ({ ...props }) => {
  const {
    cadets,
    pageTitle,
    projectDetails,
    searchInput,
    setSearchInput,
    updateCadetList,
    cadetListUpdate,
    setProjectInfo,
    projectSubmitClick,
    deleteProject,
  } = props
  const { name, description, userList } = projectDetails
  return (
    <GridContainer>
      <HeaderContainer>
        <Link href="/project">
          <BackwardArrow>&lsaquo;</BackwardArrow>
        </Link>
        {pageTitle}
      </HeaderContainer>
      <div onChange={setProjectInfo}>
        <LabelInputGroup>
          <label htmlFor="name">Project Title</label>
          <input defaultValue={name} name="name" />
        </LabelInputGroup>
        <LabelInputGroup>
          <label htmlFor="description">Description</label>
          <textarea defaultValue={description} name="description" />
        </LabelInputGroup>
      </div>
      <div>
        <SearchBar
          inputOnChange={setSearchInput}
          input={searchInput}
          cadets={cadets}
          cadetSelect={updateCadetList}
        />
      </div>
      <CadetListUl>
        {userList.map((cadet, index) => (
          <li key={index}>
            <span>{cadet.login}</span>
            <span>
              <div>100 days</div>
              <div>level 4</div>
            </span>
            <span onClick={() => cadetListUpdate(cadet.login)}>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/close-round-line.svg"
                alt="cadet deletion"
              />
            </span>
          </li>
        ))}
      </CadetListUl>
      <CancelCompleteBtn
        clickCancel={deleteProject}
        clickComplete={projectSubmitClick}
      />
    </GridContainer>
  )
}

export default ProjectView
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 7rem 8rem 4rem 1fr 4rem;
  height: 100%;
  @media only screen and (max-width: 670px) {
    grid-template-rows: 7rem 7rem 3rem 1fr 4rem;
  }
`
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
const CadetListUl = styled.ul`
  overflow: auto;
  li {
    border: 1px solid ${({ theme }) => theme.border.grey};
    border-radius: 8px;
    padding: 1em;
    background-color: #fff;
    margin: 4px 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    display: flex;
    align-items: center;
    span {
      &:nth-child(2) {
        margin-left: auto;
        color: ${({ theme }) => theme.font.grey};
        font-size: 0.7em;
        text-align: center;
        line-height: 1.5em;
      }
      &:last-child {
        border-radius: 50%;
        img {
          width: 24px;
          margin: 0 0 0 1em;
          background-color: ${({ theme }) => theme.color.light};
          border-radius: 50%;
        }
      }
    }
  }
`
const BackwardArrow = styled.div`
  padding: 1.5rem;
  color: ${({ theme }) => theme.font.grey};
`

const ButtonArea = styled.div`
  padding: 8px 0 0 0;
  button {
    &:first-child {
      background-color: grey;
      padding: 1em;
      width: 40%;
    }
    &:last-child {
      background-color: ${({ theme }) => theme.color.main};
      padding: 1em;
      width: 60%;
    }
  }
`
const LabelInputGroup = styled.div`
  position: relative;
  margin-bottom: 8px;
  label {
    position: absolute;
    top: -5px;
    left: 8px;
    background-color: #fff;
    font-size: 0.5em;
    color: ${({ theme }) => theme.font.grey};
    font-weight: bold;
  }
  input {
    border: 1px solid ${({ theme }) => theme.border.grey};
    border-radius: 4px;
    padding: 0.7em;
    width: 100%;
  }
  textarea {
    width: 100%;
    padding: 0.7em;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.border.grey};
  }
`
