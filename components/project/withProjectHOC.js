import React from 'react'
import Router from 'next/router'
import { HOST_URL } from '../../constants'
import * as ProjectAction from './actions'

const ToastMessage = () => {
  return <div style={{ backgroundColor: 'red' }}>hello</div>
}

const withProjectHOC = (Component) => {
  const newProjectComponent = ({ ...props }) => {
    const { project, isEdit } = props
    const [projectDetails, setProjectDetails] = React.useState({
      name: '',
      description: '',
      userList: [],
    })
    const [searchInput, setSearchInput] = React.useState('')

    React.useEffect(() => {
      if (project) setProjectDetails(project)
      console.log(projectDetails)
    }, [])

    const setProjectName = (e) => {
      setProjectDetails({
        ...projectDetails,
        name: e.target.value,
      })
    }

    const updateCadetList = (newCadet, setInput) => {
      const { userList } = projectDetails
      if (ProjectAction.hasSameId(userList, newCadet)) {
        setInput('')
        return
      }
      setProjectDetails({
        ...projectDetails,
        userList: [...userList, newCadet],
      })
      setInput('')
    }

    const cadetListUpdate = (cadetId) => {
      setProjectDetails({
        ...projectDetails,
        userList: ProjectAction.cadetListWithoutSelectedId(
          projectDetails.userList,
          cadetId
        ),
      })
    }
    // 이거 없애고 각 컴포넌트에서 작성해도 괜찮을듯
    const submitProject = async () => {
      if (ProjectAction.isEmpty(projectDetails)) {
        alert('모든 항목을 작성해주세요.')
        return
      }
      const res = await ProjectAction.projectCreateOrEdit(
        isEdit,
        projectDetails,
        projectDetails.projectId
      )
      if (res.ok) {
        Router.push('/project')
      }
    }

    const deleteProject = async () => {
      let res
      if (isEdit) {
        res = await fetch(`${HOST_URL}/project/${projectDetails.projectId}`, {
          method: 'DELETE',
        })
      }
      // if res.ok is false need to do something
      if (res === undefined || res.ok) {
        Router.push(`/project`)
      }
    }

    return (
      <Component
        {...props}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        projectDetails={projectDetails}
        updateCadetList={updateCadetList}
        cadetListUpdate={cadetListUpdate}
        setProjectName={setProjectName}
        submitProject={submitProject}
        deleteProject={deleteProject}
      />
    )
  }
  return newProjectComponent
}

export default withProjectHOC
