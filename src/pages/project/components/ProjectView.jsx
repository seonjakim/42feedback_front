import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import Header from '../../../components/Header'
import CancelDoneButton from '../../../components/buttons/CancelDoneButton'
import MessageModal from '../../../components/modal/MessageModal'

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
    goToPrevPage,
    isOpen,
    setIsOpen,
  } = props
  const { name, description, userList } = projectDetails
  const history = useNavigate()
  return (
    <GridContainer>
      <Header title={pageTitle} />
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
      <div style={{ margin: '8px' }}>
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
      <CancelDoneButton
        cancelClick={goToPrevPage}
        doneClick={projectSubmitClick}
      />
      <MessageModal
        isOpen={isOpen}
        message="If you leave, your edits won't be saved."
        onYesClick={() => history('/project')}
        onNoClick={() => setIsOpen(false)}
      />
    </GridContainer>
  )
}

export default ProjectView
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 7em 8em 4em 1fr auto;
  height: 100%;
  @media only screen and (max-width: 670px) {
    /* grid-template-rows: 7rem 7rem 3rem 1fr auto; */
  }
`
const CadetListUl = styled.ul`
  overflow: auto;
  margin: 8px;
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
const LabelInputGroup = styled.div`
  position: relative;
  margin: 0 8px 8px 8px;
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
