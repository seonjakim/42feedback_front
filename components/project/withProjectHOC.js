import React from 'react'
import Router from 'next/router'
import { HOST_URL } from '../../constants'

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

    const hasSameId = (cadetList, newCadet) =>
      cadetList.some((cadet) => cadet.login === newCadet.login)
    const cadetListWithoutSelectedId = (selectedCadetList, cadetName) =>
      selectedCadetList.filter((cadet) => cadet.login !== cadetName)
    const isEmpty = (obj) => Object.values(obj).some((el) => el.length === 0)

    const setProjectName = (e) => {
      setProjectDetails({
        ...projectDetails,
        name: e.target.value,
      })
    }

    const updateCadetList = (newCadet, setInput) => {
      const { userList } = projectDetails
      if (hasSameId(userList, newCadet)) {
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
        userList: cadetListWithoutSelectedId(projectDetails.userList, cadetId),
      })
    }

    const submitProject = async () => {
      if (isEmpty(projectDetails)) {
        alert('모든 항목을 작성해주세요.')
        return
      }
      let res
      if (isEdit) {
        res = await fetch(`${HOST_URL}/project/${projectDetails.projectId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectDetails),
        })
      } else {
        res = await fetch(`${HOST_URL}/project`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectDetails),
        })
      }
      console.log(res)
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
