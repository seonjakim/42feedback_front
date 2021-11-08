import FeedbackContext from '../contexts/FeedbackContext'
import { useState } from 'react'

const ContextWrapper = ({ children }) => {
  const [projects, setProjects] = useState([])

  return (
    <FeedbackContext.Provider value={{ projects, setProjects }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default ContextWrapper
