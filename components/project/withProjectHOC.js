import React from 'react'
import Router from 'next/router'

const ToastMessage = () => {
  return <div style={{ backgroundColor: 'red' }}>hello</div>
}

const withProjectHOC = (Component) => {
  const newProjectComponent = ({ ...props }) => {
    const { project, onProjectSubmit, onNoProjectSubmit } = props
    const [projectDetails, setProjectDetails] = React.useState({
      name: '',
      description: '',
      userList: [],
    })
    const [searchInput, setSearchInput] = React.useState('')

    const hasSameId = (cadetList, newCadet) =>
      cadetList.some((cadet) => cadet.login === newCadet.login)
    const cadetListWithoutSelectedId = (selectedCadetList, cadetName) =>
      selectedCadetList.filter((cadet) => cadet.login !== cadetName)
    const isEmpty = (obj) => Object.values(obj).some((el) => el.length === 0)

    React.useEffect(() => {
      if (project) setProjectDetails(project)
    }, [])

    const setProjectInfo = (e) => {
      const { name } = e.target
      setProjectDetails({
        ...projectDetails,
        [name]: e.target.value,
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
    // 이거 없애고 각 컴포넌트에서 작성해도 괜찮을듯
    const projectSubmitClick = async () => {
      if (isEmpty(projectDetails)) {
        alert('모든 항목을 작성해주세요.')
        return
      }
      const res = await onProjectSubmit(
        projectDetails,
        projectDetails.projectId
      )
      if (res.ok) {
        Router.push('/project')
      }
    }

    const deleteProject = async () => {
      const res = await onNoProjectSubmit(projectDetails.projectId)
      // if res.ok is false need to do something
      if (res.ok) {
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
        setProjectInfo={setProjectInfo}
        projectSubmitClick={projectSubmitClick}
        deleteProject={deleteProject}
      />
    )
  }
  return newProjectComponent
}

export default withProjectHOC
